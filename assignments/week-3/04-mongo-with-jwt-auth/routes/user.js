const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })

    res.json({
        msg: "User cerated successfully"
    })

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
   
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user) {
        const token = jwt.sign({
        username
     },JWT_SECRET );

     res.json({
        token
     })
    } else {
        res.status(411).json({
            message: "Incorect email and pass"
        })
    }


});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const respose = await Course.find({});

    res.json({
        cousrses: respose
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const courseId = req.params.courseId;

    await User.updateOne({
        username
    },{
        "$push": {
            purchasedCourses: courseId
        }
    });
    res.json({
        msg: "Course purchased successfully"
    })
    
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    });

    const courses = await Course.find({
         _id: {
              "$in": user.purchasedCourses

            }
    })
    res.json({
        courses: courses
    })

});

module.exports = router