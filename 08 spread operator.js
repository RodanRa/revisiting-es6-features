const first = { name: "ro" };
const second = { job: "student" };
// defining the same object key and value again will replace the older one and user the last one
const combined = { ...first, ...second, location: "nepal", name: "rodanhash" };
console.log(combined);
