/* @ts-self-types="./math-util.d.ts" */

/**
 * Computes the Euclidean modulus of two numbers.
 *
 * The Euclidean modulus operation returns the remainder of the division of the numerator by the denominator,
 * ensuring that the result is always non-negative.
 *
 * @param numerator - The number to be divided (the dividend).
 * @param denominator - The number by which to divide (the divisor). Must not be zero.
 * @returns The Euclidean modulus of the numerator and denominator.
 * @throws Will throw an error if the denominator is zero.
 *
 * @example
 * ```ts
 * euclideanMod(7, 3); // Returns 1
 * euclideanMod(-7, 3); // Returns 2
 * euclideanMod(7, 0); // Throws an error
 * ```
 */
export function euclideanMod(numerator: number, denominator: number): number {
	if (denominator === 0) {
		throw new Error("Modulus cannot be zero");
	}
	const result = numerator % denominator;
	return result < 0 ? result + denominator : result;
}
