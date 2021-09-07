const person = { name: "John" };
console.log(person);
const newPerson = Object.assign({}, person, { name: "Bob", age: 30 });
console.log(newPerson);
