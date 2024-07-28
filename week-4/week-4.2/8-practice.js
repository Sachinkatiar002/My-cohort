const arr1 = [
  {
    name: "sachin",
    age: "24",
    sex: "male"
  },
  {
    name: "samir",
    age: "22",
    sex: "male"
  },
  {
    name: "soma",
    age: "20",
    sex: "female"
  },
  {
    name: "sonali",
    age: "21",
    sex: "female"
  },
  {
    name: "sudesh",
    age: "23",
    sex: "male"
  },
];
const arr2 = [
  {
    name: "sachin",
    age: "24",
    sex: "male"
  },
  {
    name: "samir",
    age: "20",
    sex: "male"
  },
  {
    name: "soma",
    age: "24",
    sex: "female"
  },
  {
    name: "sonali",
    age: "24",
    sex: "female"
  },
  {
    name: "sudesh",
    age: "24",
    sex: "male"
  },
];

const arr3 = [];

// Compare the two arrays and add changed objects to arr3
arr1.forEach(obj1 => {
  const obj2 = arr2.find(obj => obj.name === obj1.name);
  if (obj2 && (obj1.age !== obj2.age || obj1.sex !== obj2.sex)) {
    arr3.push(obj2);
  }
});

console.log(arr3);
