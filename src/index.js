import { compose, pipe } from "lodash/fp";

let input = " Javascript           ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const renderOutput = (str) => `<div>${str}</div>`;
const lowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, lowerCase, renderOutput);

console.log(transform(input));

console.log(renderOutput(lowerCase(trim(input))));
