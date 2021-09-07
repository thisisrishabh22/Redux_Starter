const person = {
  name: "John",
  address: {
    country: "USA",
    city: "California",
  },
};
console.log(person);
const newPerson = Object.assign({ ...person, name: "Bob" });
// newPerson.address.city = "New York"; // Original property will also be changed 
console.log(newPerson);
