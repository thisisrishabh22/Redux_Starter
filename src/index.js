let input = " Javascript           ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();

const renderOutput = (str) => `<div>${str}</div>`;

console.log(renderOutput(trim(input)));
