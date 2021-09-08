const { Map } = require("immutable");
const { indexOf } = require("lodash");

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

const numbers = [1, 2, 3];

// Adding
const indexOfNumbers = numbers.indexOf(2);
const newNumbers = [
  ...numbers.slice(0, indexOfNumbers),
  4,
  ...numbers.slice(indexOfNumbers),
];

// Removing
const removed = numbers.filter((n) => n != 2);

const updated = newNumbers.map((n) => (n == 2 ? 20 : n));

console.log(newNumbers);
console.log(removed);
console.log(updated);

// Immutable Js
let book = Map({ title: "Harry Porter" });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());
