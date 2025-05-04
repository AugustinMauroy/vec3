/* @ts-self-types="./mod.d.ts" */

import { euclideanMod } from "./math-util.ts";

const re = /\((-?[.\d]+), (-?[.\d]+), (-?[.\d]+)\)/;

/**
 * A class representing a 3D vector with x, y, and z coordinates.
 */
export class Vec3 {
	/** The x-coordinate of the vector. */
	x: number;
	/** The y-coordinate of the vector. */
	y: number;
	/** The z-coordinate of the vector. */
	z: number;

	/**
	 * Creates a new 3D vector with the specified coordinates.
	 *
	 * @param x - The x-coordinate of the vector.
	 * @param y - The y-coordinate of the vector.
	 * @param z - The z-coordinate of the vector.
	 */
	constructor(x: number, y: number, z: number) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	/**
	 * Checks if the vector is the zero vector (all coordinates are zero).
	 *
	 * @returns `true` if the vector is the zero vector, otherwise `false`.
	 */
	isZero(): boolean {
		return this.x === 0 && this.y === 0 && this.z === 0;
	}

	/**
	 * Gets the value at the specified index.
	 *
	 * @param id - The index of the coordinate to retrieve (0 for x, 1 for y, 2 for z).
	 * @returns The value at the specified index.
	 */
	at(id: number): number {
		return this.toArray()[id];
	}

	/**
	 * Gets the x and z coordinates as a tuple.
	 *
	 * @returns A tuple containing the x and z coordinates.
	 */
	xz(): [number, number] {
		return [this.x, this.z];
	}

	/**
	 * Gets the x and y coordinates as a tuple.
	 *
	 * @returns A tuple containing the x and y coordinates.
	 */
	xy(): [number, number] {
		return [this.x, this.y];
	}

	/**
	 * Gets the y and z coordinates as a tuple.
	 *
	 * @returns A tuple containing the y and z coordinates.
	 */
	yz(): [number, number] {
		return [this.y, this.z];
	}

	/**
	 * Creates a new vector with the x and z coordinates swapped.
	 *
	 * @returns A new vector with the x and z coordinates swapped.
	 */
	xzy(): Vec3 {
		return new Vec3(this.x, this.z, this.y);
	}

	/**
	 * Sets the coordinates of the vector.
	 *
	 * @param x - The new x-coordinate.
	 * @param y - The new y-coordinate.
	 * @param z - The new z-coordinate.
	 * @returns The updated vector.
	 */
	set(x: number, y: number, z: number): this {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	/**
	 * Updates the vector to have the same coordinates as another vector.
	 *
	 * @param other - The vector to copy coordinates from.
	 * @returns The updated vector.
	 */
	update(other: Vec3): this {
		this.x = other.x;
		this.y = other.y;
		this.z = other.z;
		return this;
	}

	/**
	 * Creates a new vector with the coordinates rounded to the nearest integer.
	 *
	 * @returns A new vector with rounded coordinates.
	 */
	rounded(): Vec3 {
		return new Vec3(Math.round(this.x), Math.round(this.y), Math.round(this.z));
	}

	/**
	 * Rounds the coordinates of the vector to the nearest integer.
	 *
	 * @returns The updated vector.
	 */
	round(): this {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		this.z = Math.round(this.z);
		return this;
	}

	/**
	 * Creates a new vector with the coordinates floored to the nearest integer.
	 *
	 * @returns A new vector with floored coordinates.
	 */
	floored(): Vec3 {
		return new Vec3(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z));
	}

	/**
	 * Floors the coordinates of the vector to the nearest integer.
	 *
	 * @returns The updated vector.
	 */
	floor(): this {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		this.z = Math.floor(this.z);
		return this;
	}

	/**
	 * Creates a new vector offset by the specified amounts.
	 *
	 * @param dx - The amount to offset the x-coordinate.
	 * @param dy - The amount to offset the y-coordinate.
	 * @param dz - The amount to offset the z-coordinate.
	 * @returns A new vector with the offset coordinates.
	 */
	offset(dx: number, dy: number, dz: number): Vec3 {
		return new Vec3(this.x + dx, this.y + dy, this.z + dz);
	}

	/**
	 * Translates the vector by the specified amounts.
	 *
	 * @param dx - The amount to translate the x-coordinate.
	 * @param dy - The amount to translate the y-coordinate.
	 * @param dz - The amount to translate the z-coordinate.
	 * @returns The updated vector.
	 */
	translate(dx: number, dy: number, dz: number): this {
		this.x += dx;
		this.y += dy;
		this.z += dz;
		return this;
	}

	/**
	 * Adds another vector to this vector.
	 *
	 * @param other - The vector to add.
	 * @returns The updated vector.
	 */
	add(other: Vec3): this {
		this.x += other.x;
		this.y += other.y;
		this.z += other.z;
		return this;
	}

	/**
	 * Subtracts another vector from this vector.
	 *
	 * @param other - The vector to subtract.
	 * @returns The updated vector.
	 */
	subtract(other: Vec3): this {
		this.x -= other.x;
		this.y -= other.y;
		this.z -= other.z;
		return this;
	}

	/**
	 * Multiplies this vector by another vector.
	 *
	 * @param other - The vector to multiply by.
	 * @returns The updated vector.
	 */
	multiply(other: Vec3): this {
		this.x *= other.x;
		this.y *= other.y;
		this.z *= other.z;
		return this;
	}

	/**
	 * Divides this vector by another vector.
	 *
	 * @param other - The vector to divide by.
	 * @returns The updated vector.
	 */
	divide(other: Vec3): this {
		this.x /= other.x;
		this.y /= other.y;
		this.z /= other.z;
		return this;
	}

	/**
	 * Creates a new vector by adding another vector to this vector.
	 *
	 * @param other - The vector to add.
	 * @returns A new vector with the sum of the coordinates.
	 */
	plus(other: Vec3): Vec3 {
		return this.offset(other.x, other.y, other.z);
	}

	/**
	 * Creates a new vector by subtracting another vector from this vector.
	 *
	 * @param other - The vector to subtract.
	 * @returns A new vector with the difference of the coordinates.
	 */
	minus(other: Vec3): Vec3 {
		return this.offset(-other.x, -other.y, -other.z);
	}

	/**
	 * Creates a new vector scaled by a scalar value.
	 *
	 * @param scalar - The scalar value to multiply the vector by.
	 * @returns A new vector with scaled coordinates.
	 */
	scaled(scalar: number): Vec3 {
		return new Vec3(this.x * scalar, this.y * scalar, this.z * scalar);
	}

	/**
	 * Creates a new vector with the absolute values of the coordinates.
	 *
	 * @returns A new vector with absolute coordinates.
	 */
	abs(): Vec3 {
		return new Vec3(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
	}

	/**
	 * Calculates the volume of the box defined by the vector coordinates.
	 *
	 * @returns The volume of the box.
	 */
	volume(): number {
		return this.x * this.y * this.z;
	}

	/**
	 * Creates a new vector with the Euclidean modulus of the coordinates.
	 *
	 * @param other - The vector to use for the modulus operation.
	 * @returns A new vector with the Euclidean modulus of the coordinates.
	 */
	modulus(other: Vec3): Vec3 {
		return new Vec3(
			euclideanMod(this.x, other.x),
			euclideanMod(this.y, other.y),
			euclideanMod(this.z, other.z),
		);
	}

	/**
	 * Calculates the Euclidean distance to another vector.
	 *
	 * @param other - The vector to calculate the distance to.
	 * @returns The Euclidean distance to the other vector.
	 */
	distanceTo(other: Vec3): number {
		const dx = other.x - this.x;
		const dy = other.y - this.y;
		const dz = other.z - this.z;
		return Math.sqrt(dx * dx + dy * dy + dz * dz);
	}

	/**
	 * Calculates the squared Euclidean distance to another vector.
	 *
	 * @param other - The vector to calculate the squared distance to.
	 * @returns The squared Euclidean distance to the other vector.
	 */
	distanceSquared(other: Vec3): number {
		const dx = other.x - this.x;
		const dy = other.y - this.y;
		const dz = other.z - this.z;
		return dx * dx + dy * dy + dz * dz;
	}

	/**
	 * Checks if this vector is equal to another vector within a given error margin.
	 *
	 * @param other - The vector to compare to.
	 * @param error - The error margin for the comparison. Default is 0.
	 * @returns `true` if the vectors are equal within the error margin, otherwise `false`.
	 */
	equals(other: Vec3, error = 0): boolean {
		return (
			Math.abs(this.x - other.x) <= error &&
			Math.abs(this.y - other.y) <= error &&
			Math.abs(this.z - other.z) <= error
		);
	}

	/**
	 * Converts the vector to a string representation.
	 *
	 * @returns A string representation of the vector in the format `(x, y, z)`.
	 */
	toString(): string {
		return `(${this.x}, ${this.y}, ${this.z})`;
	}

	/**
	 * Creates a clone of the vector.
	 *
	 * @returns A new vector with the same coordinates.
	 */
	clone(): Vec3 {
		return this.offset(0, 0, 0);
	}

	/**
	 * Creates a new vector with the minimum coordinates of this vector and another vector.
	 *
	 * @param other - The vector to compare to.
	 * @returns A new vector with the minimum coordinates.
	 */
	min(other: Vec3): Vec3 {
		return new Vec3(
			Math.min(this.x, other.x),
			Math.min(this.y, other.y),
			Math.min(this.z, other.z),
		);
	}

	/**
	 * Creates a new vector with the maximum coordinates of this vector and another vector.
	 *
	 * @param other - The vector to compare to.
	 * @returns A new vector with the maximum coordinates.
	 */
	max(other: Vec3): Vec3 {
		return new Vec3(
			Math.max(this.x, other.x),
			Math.max(this.y, other.y),
			Math.max(this.z, other.z),
		);
	}

	/**
	 * Calculates the norm (magnitude) of the vector.
	 *
	 * @returns The norm of the vector.
	 */
	norm(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}

	/**
	 * Calculates the dot product of this vector and another vector.
	 *
	 * @param other - The vector to calculate the dot product with.
	 * @returns The dot product of the vectors.
	 */
	dot(other: Vec3): number {
		return this.x * other.x + this.y * other.y + this.z * other.z;
	}

	/**
	 * Calculates the cross product of this vector and another vector.
	 *
	 * @param other - The vector to calculate the cross product with.
	 * @returns A new vector that is the cross product of the vectors.
	 */
	cross(other: Vec3): Vec3 {
		return new Vec3(
			this.y * other.z - this.z * other.y,
			this.z * other.x - this.x * other.z,
			this.x * other.y - this.y * other.x,
		);
	}

	/**
	 * Creates a unit vector with the same direction as this vector.
	 *
	 * @returns A new unit vector.
	 */
	unit(): Vec3 {
		const norm = this.norm();
		if (norm === 0) {
			return this.clone();
		}
		return this.scaled(1 / norm);
	}

	/**
	 * Normalizes the vector to have a norm of 1.
	 *
	 * @returns The updated vector.
	 */
	normalize(): this {
		const norm = this.norm();
		if (norm !== 0) {
			this.x /= norm;
			this.y /= norm;
			this.z /= norm;
		}
		return this;
	}

	/**
	 * Scales the vector by a scalar value.
	 *
	 * @param scalar - The scalar value to multiply the vector by.
	 * @returns The updated vector.
	 */
	scale(scalar: number): this {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	}

	/**
	 * Calculates the Euclidean distance to another vector in the xy-plane.
	 *
	 * @param other - The vector to calculate the distance to.
	 * @returns The Euclidean distance to the other vector in the xy-plane.
	 */
	xyDistanceTo(other: Vec3): number {
		const dx = other.x - this.x;
		const dy = other.y - this.y;
		return Math.sqrt(dx * dx + dy * dy);
	}

	/**
	 * Calculates the Euclidean distance to another vector in the xz-plane.
	 *
	 * @param other - The vector to calculate the distance to.
	 * @returns The Euclidean distance to the other vector in the xz-plane.
	 */
	xzDistanceTo(other: Vec3): number {
		const dx = other.x - this.x;
		const dz = other.z - this.z;
		return Math.sqrt(dx * dx + dz * dz);
	}

	/**
	 * Calculates the Euclidean distance to another vector in the yz-plane.
	 *
	 * @param other - The vector to calculate the distance to.
	 * @returns The Euclidean distance to the other vector in the yz-plane.
	 */
	yzDistanceTo(other: Vec3): number {
		const dy = other.y - this.y;
		const dz = other.z - this.z;
		return Math.sqrt(dy * dy + dz * dz);
	}

	/**
	 * Calculates the inner product (dot product) of this vector and another vector.
	 *
	 * @param other - The vector to calculate the inner product with.
	 * @returns The inner product of the vectors.
	 */
	innerProduct(other: Vec3): number {
		return this.x * other.x + this.y * other.y + this.z * other.z;
	}

	/**
	 * Calculates the Manhattan distance to another vector.
	 *
	 * @param other - The vector to calculate the distance to.
	 * @returns The Manhattan distance to the other vector.
	 */
	manhattanDistanceTo(other: Vec3): number {
		return (
			Math.abs(other.x - this.x) +
			Math.abs(other.y - this.y) +
			Math.abs(other.z - this.z)
		);
	}

	/**
	 * Converts the vector to an array representation.
	 *
	 * @returns An array containing the x, y, and z coordinates.
	 */
	toArray(): [number, number, number] {
		return [this.x, this.y, this.z];
	}
}

type Vec3Input =
	| number
	| string
	| [number | string, number | string, number | string]
	| { x: number | string; y: number | string; z: number | string };

/**
 * Creates a new Vec3 instance from various input types.
 *
 * @param x - The x-coordinate or input that can be parsed into a Vec3.
 * @param y - The y-coordinate or input that can be parsed into a Vec3.
 * @param z - The z-coordinate or input that can be parsed into a Vec3.
 * @returns A new Vec3 instance.
 *
 * @example
 * ```ts
 * v(1, 2, 3); // Creates a Vec3 with coordinates (1, 2, 3)
 * v("(1, 2, 3)"); // Creates a Vec3 with coordinates (1, 2, 3)
 * v([1, 2, 3]); // Creates a Vec3 with coordinates (1, 2, 3)
 * v({ x: 1, y: 2, z: 3 }); // Creates a Vec3 with coordinates (1, 2, 3)
 * ```
 */
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
