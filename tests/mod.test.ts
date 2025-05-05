import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { Vec3, v } from "../src/mod.ts";

describe("v()", () => {
	it("no args", () => {
		const v1 = v();
		assert.strictEqual(v1.x, 0);
		assert.strictEqual(v1.y, 0);
		assert.strictEqual(v1.z, 0);
	});
	it("x, y, z", () => {
		const v1 = v(-1, 5, 10.1);
		assert.strictEqual(v1.x, -1);
		assert.strictEqual(v1.y, 5);
		assert.strictEqual(v1.z, 10.1);
	});
	it("array", () => {
		const v1 = v([4, 5, 6]);
		assert.strictEqual(v1.x, 4);
		assert.strictEqual(v1.y, 5);
		assert.strictEqual(v1.z, 6);
	});
	it("object", () => {
		const v1 = v({ x: 9, y: 8, z: 7 });
		assert.strictEqual(v1.x, 9);
		assert.strictEqual(v1.y, 8);
		assert.strictEqual(v1.z, 7);
	});
	it("string coords", () => {
		const v1 = v("1", "1.5", "-30.2");
		assert.strictEqual(v1.x, 1);
		assert.strictEqual(v1.y, 1.5);
		assert.strictEqual(v1.z, -30.2);
	});
	it("deserialize", () => {
		const v1 = v(v(1, -3.5, 0).toString());
		assert.strictEqual(v1.x, 1);
		assert.strictEqual(v1.y, -3.5);
		assert.strictEqual(v1.z, 0);
		const v2 = v(v(-111, 222, 9876543210.12345).toString());
		assert.strictEqual(v2.x, -111);
		assert.strictEqual(v2.y, 222);
		assert.strictEqual(v2.z, 9876543210.12345);
	});
	it("invalid deserialize", () => {
		assert.throws(() => v("lol hax"), /cannot parse/);
	});
});
describe("vec3", () => {
	it("isZero", () => {
		const v1 = new Vec3(0, 1, 2);
		const v2 = new Vec3(0, 0, 0);
		assert.ok(!v1.isZero());
		assert.ok(v2.isZero());
	});
	it("at", () => {
		const v1 = new Vec3(0, 1, 2);
		assert.strictEqual(v1.at(0), 0);
		assert.strictEqual(v1.at(1), 1);
		assert.strictEqual(v1.at(2), 2);
	});
	it("xz", () => {
		const v1 = new Vec3(0, 1, 2);
		const a = v1.xz();
		assert.strictEqual(a[0], 0);
		assert.strictEqual(a[1], 2);
	});
	it("xy", () => {
		const v1 = new Vec3(0, 1, 2);
		const a = v1.xy();
		assert.strictEqual(a[0], 0);
		assert.strictEqual(a[1], 1);
	});
	it("yz", () => {
		const v1 = new Vec3(0, 1, 2);
		const a = v1.yz();
		assert.strictEqual(a[0], 1);
		assert.strictEqual(a[1], 2);
	});
	it("xzy", () => {
		const v1 = new Vec3(0, 1, 2);
		const v2 = v1.xzy();
		assert.strictEqual(v2.x, 0);
		assert.strictEqual(v2.y, 2);
		assert.strictEqual(v2.z, 1);
	});
	it("rounded", () => {
		const v1 = new Vec3(1.1, -1.5, 1.9);
		const v2 = v1.rounded();
		v1.x = 10;
		assert.strictEqual(v2.x, 1);
		assert.strictEqual(v2.y, -1);
		assert.strictEqual(v2.z, 2);
	});
	it("round", () => {
		const v1 = new Vec3(1.1, -1.5, 1.9);
		const v2 = v1.round();
		assert.strictEqual(v2, v1);
		assert.strictEqual(v1.x, 1);
		assert.strictEqual(v1.y, -1);
		assert.strictEqual(v1.z, 2);
	});
	it("floored", () => {
		const v1 = new Vec3(1.1, -1.5, 1.9);
		const v2 = v1.floored();
		v1.x = 10;
		assert.strictEqual(v2.x, 1);
		assert.strictEqual(v2.y, -2);
		assert.strictEqual(v2.z, 1);
	});
	it("floor", () => {
		const v1 = new Vec3(1.1, -1.5, 1.9);
		const v2 = v1.floor();
		assert.strictEqual(v2, v1);
		assert.strictEqual(v1.x, 1);
		assert.strictEqual(v1.y, -2);
		assert.strictEqual(v1.z, 1);
	});
	it("offset", () => {
		const v1 = new Vec3(1, 2, 3);
		const v2 = v1.offset(10, -10, 20);
		v1.x = -100;
		assert.strictEqual(v2.x, 11);
		assert.strictEqual(v2.y, -8);
		assert.strictEqual(v2.z, 23);
	});
	it("translate", () => {
		const v1 = new Vec3(1, 2, 3);
		v1.translate(10, -10, 20);
		assert.strictEqual(v1.x, 11);
		assert.strictEqual(v1.y, -8);
		assert.strictEqual(v1.z, 23);
	});
	it("plus", () => {
		const v1 = new Vec3(1, 2, 3);
		const v2 = new Vec3(-1, 0, 1);
		const v3 = v1.plus(v2);
		assert.strictEqual(v1.x, 1);
		assert.strictEqual(v1.y, 2);
		assert.strictEqual(v1.z, 3);
		assert.strictEqual(v2.x, -1);
		assert.strictEqual(v2.y, 0);
		assert.strictEqual(v2.z, 1);
		assert.strictEqual(v3.x, 0);
		assert.strictEqual(v3.y, 2);
		assert.strictEqual(v3.z, 4);
	});
	it("minus", () => {
		const v1 = new Vec3(1, 2, 3);
		const v2 = new Vec3(-1, 0, 1);
		const v3 = v1.minus(v2);
		assert.strictEqual(v1.x, 1);
		assert.strictEqual(v1.y, 2);
		assert.strictEqual(v1.z, 3);
		assert.strictEqual(v2.x, -1);
		assert.strictEqual(v2.y, 0);
		assert.strictEqual(v2.z, 1);
		assert.strictEqual(v3.x, 2);
		assert.strictEqual(v3.y, 2);
		assert.strictEqual(v3.z, 2);
	});
	it("scaled", () => {
		const v1 = new Vec3(1, 2, 3);
		const v2 = v1.scaled(2);
		assert.strictEqual(v1.x, 1);
		assert.strictEqual(v1.y, 2);
		assert.strictEqual(v1.z, 3);
		assert.strictEqual(v2.x, 2);
		assert.strictEqual(v2.y, 4);
		assert.strictEqual(v2.z, 6);
	});
	it("abs", () => {
		const v1 = new Vec3(1.1, -1.5, 1.9);
		const v2 = v1.abs();
		v1.x = 10;
		assert.strictEqual(v2.x, 1.1);
		assert.strictEqual(v2.y, 1.5);
		assert.strictEqual(v2.z, 1.9);
	});
	it("distanceTo", () => {
		const v1 = new Vec3(1, 1, 1);
		const v2 = new Vec3(2, 2, 2);
		const dist1 = v1.distanceTo(v2);
		const dist2 = v2.distanceTo(v1);
		const expected = 1.7320508075688772;
		assert.strictEqual(dist1, dist2);
		assert.strictEqual(
			Math.round(dist1 * 100000),
			Math.round(expected * 100000),
		);
	});
	it("distanceSquared", () => {
		const v1 = new Vec3(1, 1, 1);
		const v2 = new Vec3(2, 2, 2);
		const dist1 = v1.distanceSquared(v2);
		const dist2 = v2.distanceSquared(v1);
		const expected = 3;
		assert.strictEqual(dist1, dist2);
		assert.strictEqual(
			Math.round(dist1 * 100000),
			Math.round(expected * 100000),
		);
	});
	it("equals", () => {
		const v1 = new Vec3(1, 2, 3);
		const v2 = v1.scaled(0.23424);
		const v3 = v1.scaled(0.23424);
		assert.ok(v2.equals(v3));
		const v4 = new Vec3(0.1, 0, 0);
		const v5 = new Vec3(0.2, 0, 0);
		const v6 = new Vec3(0.3, 0, 0);
		assert.ok(v4.plus(v5).equals(v6, Number.EPSILON));
	});
	it("toString", () => {
		const v1 = new Vec3(1, -1, 3.14);
		assert.strictEqual(v1.toString(), "(1, -1, 3.14)");
	});
	it("clone", () => {
		const v1 = new Vec3(1, 2, 3);
		const v2 = v1.clone();
		v2.x = 10;
		assert.strictEqual(v1.x, 1);
		assert.strictEqual(v1.y, 2);
		assert.strictEqual(v1.z, 3);
		assert.strictEqual(v2.x, 10);
		assert.strictEqual(v2.y, 2);
		assert.strictEqual(v2.z, 3);
	});
	it("add", () => {
		const v1 = new Vec3(1, 2, 3);
		const v2 = new Vec3(-1, -2, -3);
		const v3 = v1.add(v2);
		assert.strictEqual(v3, v1);
		assert.strictEqual(v1.x, 0);
		assert.strictEqual(v1.y, 0);
		assert.strictEqual(v1.z, 0);
	});
	it("subtract", () => {
		const v1 = new Vec3(1, 2, 3);
		const v2 = new Vec3(-1, -2, -3);
		const v3 = v1.subtract(v2);
		assert.strictEqual(v3, v1);
		assert.strictEqual(v1.x, 2);
		assert.strictEqual(v1.y, 4);
		assert.strictEqual(v1.z, 6);
	});
	it("multiply", () => {
		const v1 = new Vec3(1, 2, 3);
		const v2 = new Vec3(-1, -2, -5);
		const v3 = v1.multiply(v2);
		assert.strictEqual(v3, v1);
		assert.strictEqual(v1.x, -1);
		assert.strictEqual(v1.y, -4);
		assert.strictEqual(v1.z, -15);
	});
	it("divide", () => {
		const v1 = new Vec3(10, 20, 30);
		const v2 = new Vec3(2, 5, 3);
		const v3 = v1.divide(v2);
		assert.strictEqual(v3, v1);
		assert.strictEqual(v1.x, 5);
		assert.strictEqual(v1.y, 4);
		assert.strictEqual(v1.z, 10);
	});
	it("set", () => {
		const v1 = new Vec3(12, 32, 46);
		const v2 = v1.set(0, 10, 100);
		assert.strictEqual(v1, v2);
		assert.strictEqual(v1.x, 0);
		assert.strictEqual(v1.y, 10);
		assert.strictEqual(v1.z, 100);
	});
	it("modulus", () => {
		const v1 = new Vec3(12, 32, -1);
		const v2 = new Vec3(14, 32, 16);
		const v3 = v1.modulus(v2);
		assert.strictEqual(v1.x, 12);
		assert.strictEqual(v1.y, 32);
		assert.strictEqual(v1.z, -1);
		assert.strictEqual(v2.x, 14);
		assert.strictEqual(v2.y, 32);
		assert.strictEqual(v2.z, 16);
		assert.strictEqual(v3.x, 12);
		assert.strictEqual(v3.y, 0);
		assert.strictEqual(v3.z, 15);
	});
	it("volume", () => {
		const v1 = new Vec3(3, 4, 5);
		assert.strictEqual(v1.volume(), 60);
	});
	it("min", () => {
		const v1 = new Vec3(-1, 0, 1);
		const v2 = new Vec3(10, -10, 1.1);
		const v3 = v1.min(v2);
		assert.strictEqual(v3.x, -1);
		assert.strictEqual(v3.y, -10);
		assert.strictEqual(v3.z, 1);
	});
	it("max", () => {
		const v1 = new Vec3(-1, 0, 1);
		const v2 = new Vec3(10, -10, 1.1);
		const v3 = v1.max(v2);
		assert.strictEqual(v3.x, 10);
		assert.strictEqual(v3.y, 0);
		assert.strictEqual(v3.z, 1.1);
	});
	it("update", () => {
		const v1 = new Vec3(-1, 0, 1);
		const v2 = new Vec3(10, -10, 1.1);
		const v3 = v1.update(v2);
		assert.strictEqual(v3, v1);
		assert.strictEqual(v1.x, 10);
		assert.strictEqual(v1.y, -10);
		assert.strictEqual(v1.z, 1.1);
		assert.strictEqual(v2.x, 10);
		assert.strictEqual(v2.y, -10);
		assert.strictEqual(v2.z, 1.1);
	});
	it("norm", () => {
		const v1 = new Vec3(-10, 0, 10);
		assert.strictEqual(
			Math.round(v1.norm() * 100000),
			Math.round(14.1421356237 * 100000),
		);
	});
	it("dot", () => {
		const v1 = new Vec3(-1, -1, -1);
		const v2 = new Vec3(1, 1, 1);
		assert.strictEqual(v1.dot(v2), -3);
	});
	it("cross", () => {
		const v1 = new Vec3(1, 0, 0);
		const v2 = new Vec3(0, 1, 0);
		const v3 = new Vec3(0, 0, 1);
		assert.ok(v1.cross(v2).equals(v3));
	});
	it("unit", () => {
		const v1 = new Vec3(10, -10, 1.1);
		const v2 = v1.unit();
		assert.strictEqual(
			Math.round(v2.x * 100000),
			Math.round(0.7049774402 * 100000),
		);
		assert.strictEqual(
			Math.round(v2.y * 100000),
			Math.round(-0.7049774402 * 100000),
		);
		assert.strictEqual(
			Math.round(v2.z * 100000),
			Math.round(0.07754751842 * 100000),
		);
		const v3 = new Vec3(0, 0, 0);
		const v4 = v3.unit();
		assert.strictEqual(v4.x, 0);
		assert.strictEqual(v4.y, 0);
		assert.strictEqual(v4.z, 0);
	});
	it("normalize", () => {
		const v1 = new Vec3(10, -10, 1.1);
		const v2 = v1.normalize();
		assert.strictEqual(
			Math.round(v2.x * 100000),
			Math.round(0.7049774402 * 100000),
		);
		assert.strictEqual(
			Math.round(v2.y * 100000),
			Math.round(-0.7049774402 * 100000),
		);
		assert.strictEqual(
			Math.round(v2.z * 100000),
			Math.round(0.07754751842 * 100000),
		);
		const v3 = new Vec3(0, 0, 0);
		const v4 = v3.normalize();
		assert.strictEqual(v4.x, 0);
		assert.strictEqual(v4.y, 0);
		assert.strictEqual(v4.z, 0);
	});
	it("scale", () => {
		const v1 = new Vec3(10, -10, 1.1);
		const v2 = v1.scale(1.5);
		assert.strictEqual(v2.x, 15);
		assert.strictEqual(v2.y, -15);
		assert.strictEqual(Math.round(v2.z * 100000), Math.round(1.65 * 100000));
	});
	it("xyDistanceTo", () => {
		const v1 = new Vec3(1, 1, 1);
		const v2 = new Vec3(2, 2, 2);
		const dist1 = v1.xyDistanceTo(v2);
		const dist2 = v2.xyDistanceTo(v1);
		const expected = Math.SQRT2;
		assert.strictEqual(dist1, dist2);
		assert.strictEqual(
			Math.round(dist1 * 100000),
			Math.round(expected * 100000),
		);
	});
	it("xzDistanceTo", () => {
		const v1 = new Vec3(1, 1, 1);
		const v2 = new Vec3(2, 2, 2);
		const dist1 = v1.xzDistanceTo(v2);
		const dist2 = v2.xzDistanceTo(v1);
		const expected = Math.SQRT2;
		assert.strictEqual(dist1, dist2);
		assert.strictEqual(
			Math.round(dist1 * 100000),
			Math.round(expected * 100000),
		);
	});
	it("yzDistanceTo", () => {
		const v1 = new Vec3(1, 1, 1);
		const v2 = new Vec3(2, 2, 2);
		const dist1 = v1.yzDistanceTo(v2);
		const dist2 = v2.yzDistanceTo(v1);
		const expected = Math.SQRT2;
		assert.strictEqual(dist1, dist2);
		assert.strictEqual(
			Math.round(dist1 * 100000),
			Math.round(expected * 100000),
		);
	});
	it("innerProduct", () => {
		const v1 = new Vec3(-1, 0, 1);
		const v2 = new Vec3(0, 1, 0);
		const ip1 = v1.innerProduct(v2);
		const ip2 = v2.innerProduct(v1);
		assert.strictEqual(ip1, ip2);
		assert.strictEqual(ip1, 0);
	});
	it("manhattanDistanceTo", () => {
		const v1 = new Vec3(-1, 0, 1);
		const v2 = new Vec3(10, -10, 1.1);
		const dist1 = v1.manhattanDistanceTo(v2);
		const dist2 = v2.manhattanDistanceTo(v1);
		assert.strictEqual(dist1, dist2);
		assert.strictEqual(dist1, 21.1);
	});
	it("toArray", () => {
		const v1 = new Vec3(1, -1, 3.14);
		const array = v1.toArray();
		assert.strictEqual(v1.x, array[0]);
		assert.strictEqual(v1.y, array[1]);
		assert.strictEqual(v1.z, array[2]);
	});
});
