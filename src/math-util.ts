/* @ts-self-types="./math-util.d.ts" */
export function euclideanMod(numerator: number, denominator: number): number {
	if (denominator === 0) {
		throw new Error("Modulus cannot be zero");
	}
	const result = numerator % denominator;

	return result < 0 ? result + denominator : result;
}
