# @augustinmauroy/vec3

A small and efficient JavaScript library for 3D vector math. It provides a simple API for creating, manipulating, and performing operations on 3D vectors.

[![npm version](https://img.shields.io/npm/v/@augustinmauroy/vec3.svg)](https://www.npmjs.com/package/@augustinmauroy/vec3)
[![JSR](https://jsr.io/badges/@augustinmauroy/vec3)](https://jsr.io/@augustinmauroy/vec3)

> **NOTE** This package is tested with [Node.js](https://nodejs.org/en/) but the package din't use any Node.js specific feature. It should work in any JavaScript environment (browser, Deno, etc.). If you encounter any issue, please open an issue on [GitHub](https://github.com/AugustinMauroy/vec3/issues).

## Example

```js
import { Vec3 } from '@augustinmauroy/vec3';

const v1 = new Vec3(1, 2, 3);
const v2 = new Vec3(4, 5, 6);

const v3 = v1.add(v2); // v3 = (5, 7, 9)
const v4 = v1.sub(v2); // v4 = (-3, -3, -3)
```
