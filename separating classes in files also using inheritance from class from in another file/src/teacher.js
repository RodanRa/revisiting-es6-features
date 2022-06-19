import { Person } from "./person";
export class Teacher extends Person {
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
