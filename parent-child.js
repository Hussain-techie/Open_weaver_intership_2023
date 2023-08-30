class Parent {
    constructor(name) {
      this.name = name;
    }
  
    getParentName() {
      return this.name;
    }
  }
  
  class Child extends Parent {
    constructor(name, age) {
      super(name);
      this.age = age;
    }
  
    getChildInfo() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  const parentObj = new Parent("John");
  console.log("Parent Name:", parentObj.getParentName());
  
  const childObj = new Child("Alice", 10);
  console.log("Child Info:", childObj.getChildInfo());
  