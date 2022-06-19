class Person {
  /* class extending the class also inherits the constructor, and if we create 
    custom constructor in child class the constructor should be called anyway using the super method */
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} walks`);
  }
}
class Teacher extends Person {
  constructor(name, degree) {
    // calling the parent class constructor where super denotes the parent constructor i.e constructor of Person
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log(`${this.name} teaches`);
  }
  degrees() {
    console.log(`${this.name} has degree of ${this.degree}`);
  }
}
const person = new Person("hari");
const teacher = new Teacher("ram", "bachelor");
person.walk();
teacher.degrees();
