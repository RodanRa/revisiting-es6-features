export class Person {
  /* class extending the class also inherits the constructor, and if we create 
      custom constructor in child class the constructor should be called anyway using the super method */
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} walks`);
  }
}
