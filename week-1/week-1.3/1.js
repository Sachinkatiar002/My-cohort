class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  speak() {
    console.log("hi there " + this.speaks);
  }
}

let dog = new Animal("dog", 4, "bhow bhow"); // create object
let cat = new Animal("cat", 4, "meow");
cat.speak(); // call function on object
dog.speak(); // call function on object