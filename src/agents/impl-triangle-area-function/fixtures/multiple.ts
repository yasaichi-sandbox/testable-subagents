/**
 * Multiplies two numbers and returns their product.
 *
 * @param a - The first number
 * @param b - The second number
 * @returns The product of a and b
 * @throws TypeError when either parameter is undefined
 *
 * @example
 * multiply(14, 3); // => 42
 * multiply(6, 7); // => 42
 * multiply(NaN, 5); // => NaN
 * multiply(5, undefined); // => throws TypeError
 */
export function multiply(a: number, b: number): number {
  // Check for undefined values and throw TypeError
  if (a === undefined || b === undefined) {
    throw new TypeError('Both parameters must be defined numbers');
  }

  // Return the product of the two numbers
  // This naturally handles NaN cases (NaN * anything = NaN)
  return a * b;
}
