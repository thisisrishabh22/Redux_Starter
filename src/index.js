import { compose, pipe } from "lodash/fp";
import { add } from "./currying";

let input = " Javascript           ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const lowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, lowerCase, wrap("div"));

console.log(transform(input));

// console.log(wrap(lowerCase(trim(input))));

console.log(add(1)(2));
