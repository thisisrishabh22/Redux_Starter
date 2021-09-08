const person = {
  name: "John",
  address: {
    country: "USA",
    city: "California",
  },
};
console.log(person);
const newPerson = Object.assign({
  ...person,
  name: "Bob",
  address: { ...person.address, city: "New York" }, // spreading the data from address in person assigning new value to keep immutability
});
// newPerson.address.city = "New York"; // Original property will also be changed
console.log(newPerson);
