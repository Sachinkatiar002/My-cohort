const express = require("express");
const port = 3000;

function calculatateSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const app = express();

app.get("/", function(req, res){
  const n = req.query.n;
  const ans = calculatateSum(n)
  res.send(ans.toString()); // respod in string.
})


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});