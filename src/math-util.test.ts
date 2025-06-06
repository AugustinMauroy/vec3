import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { euclideanMod } from "./math-util.ts";

describe("math-util", () => {
	describe("euclideanMod", () => {
		it("should return the correct result for positive numbers", () => {
			assert.strictEqual(euclideanMod(5, 3), 2);
			assert.strictEqual(euclideanMod(10, 4), 2);
		});

		it("should return the correct result for negative numbers", () => {
			assert.strictEqual(euclideanMod(-5, 3), 1);
			assert.strictEqual(euclideanMod(-10, 4), 2);
		});

		it("should return the correct result for mixed signs", () => {
			assert.strictEqual(euclideanMod(5, -3), 2);
			assert.strictEqual(euclideanMod(-5, -3), -5);
		});

		it("should throw an error for zero modulus", () => {
			assert.throws(() => euclideanMod(5, 0), {
				message: "Modulus cannot be zero",
			});
		});
	});
});
