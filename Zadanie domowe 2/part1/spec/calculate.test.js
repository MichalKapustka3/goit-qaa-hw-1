// calculate.test.js
const calculateRectangleArea = require("./calculate");

test("Oblicza pole prostokąta o długości 5 i szerokości 4", () => {
  expect(calculateRectangleArea(5, 4)).toBe(20);
});

test("Oblicza pole prostokąta o długości 3 i szerokości 7", () => {
  expect(calculateRectangleArea(3, 7)).toBe(21);
});

test("Oblicza pole prostokąta o długości 10 i szerokości 10", () => {
  expect(calculateRectangleArea(10, 10)).toBe(100);
});
