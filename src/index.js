function sayHello() {
  return function () {
    return "hello there im a anonymous fucntion";
  };
}

let fnref = sayHello();
let msg = fnref();
console.log(msg);
