# @augustinmauroy/vec3

A small and efficient JavaScript library for 3D vector math. It provides a simple API for creating, manipulating, and performing operations on 3D vectors.

[![npm version](https://img.shields.io/npm/v/@augustinmauroy/vec3.svg)](https://www.npmjs.com/package/@augustinmauroy/vec3)
[![JSR](https://jsr.io/badges/@augustinmauroy/vec3)](https://jsr.io/@augustinmauroy/vec3)

> **NOTE** This package is tested with [Node.js](https://nodejs.org/en/) but the package din't use any Node.js specific feature. It should work in any JavaScript environment (browser, Deno, etc.). If you encounter any issue, please open an issue on [GitHub](https://github.com/AugustinMauroy/vec3/issues).

## Example

```typescript
import { Vec3, v } from '@augustinmauroy/vec3';

// Create vectors using the constructor
const v1 = new Vec3(1, 2, 3);
const v2 = new Vec3(4, 5, 6);

// Create vectors using the helper function
const v3 = v(7, 8, 9); // From numbers
const v4 = v([10, 11, 12]); // From an array
const v5 = v({ x: 13, y: 14, z: 15 }); // From an object
const v6 = v('(1, -1, 3.14)'); // From a string representation

// Perform operations (most methods modify the vector in place)
v1.add(v2); // v1 is now (5, 7, 9)
console.log(v1.toString()); // Output: (5, 7, 9)

// Use immutable operations (return a new Vec3 instance)
const sum = v3.plus(v4); // sum is (17, 19, 21), v3 remains unchanged
console.log(sum.toString()); // Output: (17, 19, 21)

const scaled = v5.scaled(2); // scaled is (26, 28, 30), v5 remains unchanged
console.log(scaled.toString()); // Output: (26, 28, 30)

// Calculate distance
const distance = v1.distanceTo(v2);
console.log(distance);

// Normalize a vector
const normalized = v3.unit(); // normalized is a unit vector, v3 remains unchanged
console.log(normalized.norm()); // Output: ~1
```
