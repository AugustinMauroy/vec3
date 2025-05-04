/* @ts-self-types="./mod.d.ts" */
import { euclideanMod } from "./math-util.ts";

const re = /\((-?[.\d]+), (-?[.\d]+), (-?[.\d]+)\)/;

export class Vec3 {
	x: number;
	y: number;
	z: number;

	constructor(x: number, y: number, z: number) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	isZero(): boolean {
		return this.x === 0 && this.y === 0 && this.z === 0;
	}

	at(id: number): number {
		return this.toArray()[id];
	}

	xz(): [number, number] {
		return [this.x, this.z];
	}

	xy(): [number, number] {
		return [this.x, this.y];
	}

	yz(): [number, number] {
		return [this.y, this.z];
	}

	xzy(): Vec3 {
		return new Vec3(this.x, this.z, this.y);
	}

	set(x: number, y: number, z: number): this {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	update(other: Vec3): this {
		this.x = other.x;
		this.y = other.y;
		this.z = other.z;
		return this;
	}

	rounded(): Vec3 {
		return new Vec3(Math.round(this.x), Math.round(this.y), Math.round(this.z));
	}

	round(): this {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		this.z = Math.round(this.z);
		return this;
	}

	floored(): Vec3 {
		return new Vec3(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z));
	}

	floor(): this {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		this.z = Math.floor(this.z);
		return this;
	}

	offset(dx: number, dy: number, dz: number): Vec3 {
		return new Vec3(this.x + dx, this.y + dy, this.z + dz);
	}

	translate(dx: number, dy: number, dz: number): this {
		this.x += dx;
		this.y += dy;
		this.z += dz;
		return this;
	}

	add(other: Vec3): this {
		this.x += other.x;
		this.y += other.y;
		this.z += other.z;
		return this;
	}

	subtract(other: Vec3): this {
		this.x -= other.x;
		this.y -= other.y;
		this.z -= other.z;
		return this;
	}

	multiply(other: Vec3): this {
		this.x *= other.x;
		this.y *= other.y;
		this.z *= other.z;
		return this;
	}

	divide(other: Vec3): this {
		this.x /= other.x;
		this.y /= other.y;
		this.z /= other.z;
		return this;
	}

	plus(other: Vec3): Vec3 {
		return this.offset(other.x, other.y, other.z);
	}

	minus(other: Vec3): Vec3 {
		return this.offset(-other.x, -other.y, -other.z);
	}

	scaled(scalar: number): Vec3 {
		return new Vec3(this.x * scalar, this.y * scalar, this.z * scalar);
	}

	abs(): Vec3 {
		return new Vec3(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
	}

	volume(): number {
		return this.x * this.y * this.z;
	}

	modulus(other: Vec3): Vec3 {
		return new Vec3(
			euclideanMod(this.x, other.x),
			euclideanMod(this.y, other.y),
			euclideanMod(this.z, other.z),
		);
	}

	distanceTo(other: Vec3): number {
		const dx = other.x - this.x;
		const dy = other.y - this.y;
		const dz = other.z - this.z;
		return Math.sqrt(dx * dx + dy * dy + dz * dz);
	}

	distanceSquared(other: Vec3): number {
		const dx = other.x - this.x;
		const dy = other.y - this.y;
		const dz = other.z - this.z;
		return dx * dx + dy * dy + dz * dz;
	}

	equals(other: Vec3, error = 0): boolean {
		return (
			Math.abs(this.x - other.x) <= error &&
			Math.abs(this.y - other.y) <= error &&
			Math.abs(this.z - other.z) <= error
		);
	}

	toString(): string {
		return `(${this.x}, ${this.y}, ${this.z})`;
	}

	clone(): Vec3 {
		return this.offset(0, 0, 0);
	}

	min(other: Vec3): Vec3 {
		return new Vec3(
			Math.min(this.x, other.x),
			Math.min(this.y, other.y),
			Math.min(this.z, other.z),
		);
	}

	max(other: Vec3): Vec3 {
		return new Vec3(
			Math.max(this.x, other.x),
			Math.max(this.y, other.y),
			Math.max(this.z, other.z),
		);
	}

	norm(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}

	dot(other: Vec3): number {
		return this.x * other.x + this.y * other.y + this.z * other.z;
	}

	cross(other: Vec3): Vec3 {
		return new Vec3(
			this.y * other.z - this.z * other.y,
			this.z * other.x - this.x * other.z,
			this.x * other.y - this.y * other.x,
		);
	}

	unit(): Vec3 {
		const norm = this.norm();
		if (norm === 0) {
			return this.clone();
		}
		return this.scaled(1 / norm);
	}

	normalize(): this {
		const norm = this.norm();
		if (norm !== 0) {
			this.x /= norm;
			this.y /= norm;
			this.z /= norm;
		}
		return this;
	}

	scale(scalar: number): this {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	}

	xyDistanceTo(other: Vec3): number {
		const dx = other.x - this.x;
		const dy = other.y - this.y;
		return Math.sqrt(dx * dx + dy * dy);
	}

	xzDistanceTo(other: Vec3): number {
		const dx = other.x - this.x;
		const dz = other.z - this.z;
		return Math.sqrt(dx * dx + dz * dz);
	}

	yzDistanceTo(other: Vec3): number {
		const dy = other.y - this.y;
		const dz = other.z - this.z;
		return Math.sqrt(dy * dy + dz * dz);
	}

	innerProduct(other: Vec3): number {
		return this.x * other.x + this.y * other.y + this.z * other.z;
	}

	manhattanDistanceTo(other: Vec3): number {
		return (
			Math.abs(other.x - this.x) +
			Math.abs(other.y - this.y) +
			Math.abs(other.z - this.z)
		);
	}

	toArray(): [number, number, number] {
		return [this.x, this.y, this.z];
	}
}

type Vec3Input =
	| number
	| string
	| [number | string, number | string, number | string]
	| { x: number | string; y: number | string; z: number | string };

export function v(x?: Vec3Input, y?: Vec3Input, z?: Vec3Input): Vec3 {
	if (x == null) {
		return new Vec3(0, 0, 0);
	}
	if (Array.isArray(x)) {
		return new Vec3(
			Number.parseFloat(String(x[0])),
			Number.parseFloat(String(x[1])),
			Number.parseFloat(String(x[2])),
		);
	}
	if (typeof x === "object") {
		return new Vec3(
			Number.parseFloat(String(x.x)),
			Number.parseFloat(String(x.y)),
			Number.parseFloat(String(x.z)),
		);
	}
	if (typeof x === "string" && y == null) {
		const match = x.match(re);
		if (match) {
			return new Vec3(
				Number.parseFloat(match[1]),
				Number.parseFloat(match[2]),
				Number.parseFloat(match[3]),
			);
		}
		throw new Error(`vec3: cannot parse: ${x}`);
	}
	if (typeof x === "number" && typeof y === "number" && typeof z === "number") {
		return new Vec3(x, y, z);
	}
	// Handle cases where x might be a string representing a number
	const xNum = Number.parseFloat(String(x));
	const yNum = Number.parseFloat(String(y));
	const zNum = Number.parseFloat(String(z));
	if (!Number.isNaN(xNum) && !Number.isNaN(yNum) && !Number.isNaN(zNum)) {
		return new Vec3(xNum, yNum, zNum);
	}
	// Fallback or throw error for unexpected input types
	console.warn("vec3: unexpected input types, returning zero vector.", x, y, z);
	return new Vec3(0, 0, 0);
}
