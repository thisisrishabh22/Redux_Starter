export function add(a) {
  return function (b) {
    return a + b;
  };
}
