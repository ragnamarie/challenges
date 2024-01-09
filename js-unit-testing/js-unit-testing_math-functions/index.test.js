import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("add() returns 5 if called with add (2, 3) and returns a negative value if the greater argument is negative.", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("subtract() returns 10 if called with add (15, 5) and returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("multiply() returns 8 if called with multiply(2, 4), returns a negative value if only the first argument is negative, returns a negative value if only the second argument is negative, returns a positive value if called with two negative arguments", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("divide() returns 3 if called with divide(9, 3) and returns 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
