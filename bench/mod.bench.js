import { Suite } from 'bench-node';
import { Vec3, v } from '../dist/mod.js';

const vecA = new Vec3(1, 2, 3);
const vecB = new Vec3(4, 5, 6);
const scalar = 1.5;

const suite = new Suite();

suite.add('v() no args', () => {
    v();
});

suite.add('v() x, y, z', () => {
    v(1, 2, 3);
});

suite.add('v() array', () => {
    v([4, 5, 6]);
});

suite.add('v() object', () => {
    v({ x: 7, y: 8, z: 9 });
});

suite.add('v() string coords', () => {
    v("10", "11", "12");
});

suite.add('v() deserialize', () => {
    v("(1, -3.5, 0)");
});

suite.add('vec3 constructor', () => {
    new Vec3(1, 2, 3);
});

suite.add('vec3 set', () => {
    vecA.clone().set(10, 20, 30);
});

suite.add('vec3 update', () => {
    vecA.clone().update(vecB);
});

suite.add('vec3 rounded', () => {
    vecA.rounded();
});

suite.add('vec3 round', () => {
    vecA.clone().round();
});

suite.add('vec3 floored', () => {
    vecA.floored();
});

suite.add('vec3 floor', () => {
    vecA.clone().floor();
});

suite.add('vec3 offset', () => {
    vecA.offset(10, 10, 10);
});

suite.add('vec3 translate', () => {
    vecA.clone().translate(10, 10, 10);
});

suite.add('vec3 add', () => {
    vecA.clone().add(vecB);
});

suite.add('vec3 subtract', () => {
    vecA.clone().subtract(vecB);
});

suite.add('vec3 multiply', () => {
    vecA.clone().multiply(vecB);
});

suite.add('vec3 divide', () => {
    vecA.clone().divide(vecB);
});

suite.add('vec3 plus', () => {
    vecA.plus(vecB);
});

suite.add('vec3 minus', () => {
    vecA.minus(vecB);
});

suite.add('vec3 scaled', () => {
    vecA.scaled(scalar);
});

suite.add('vec3 abs', () => {
    vecA.abs();
});

suite.add('vec3 volume', () => {
    vecA.volume();
});

suite.add('vec3 modulus', () => {
    vecA.modulus(vecB);
});

suite.add('vec3 distanceTo', () => {
    vecA.distanceTo(vecB);
});

suite.add('vec3 distanceSquared', () => {
    vecA.distanceSquared(vecB);
});

suite.add('vec3 equals', () => {
    vecA.equals(vecB);
});

suite.add('vec3 toString', () => {
    vecA.toString();
});

suite.add('vec3 clone', () => {
    vecA.clone();
});

suite.add('vec3 min', () => {
    vecA.min(vecB);
});

suite.add('vec3 max', () => {
    vecA.max(vecB);
});

suite.add('vec3 norm', () => {
    vecA.norm();
});

suite.add('vec3 dot', () => {
    vecA.dot(vecB);
});

suite.add('vec3 cross', () => {
    vecA.cross(vecB);
});

suite.add('vec3 unit', () => {
    vecA.unit();
});

suite.add('vec3 normalize', () => {
    vecA.clone().normalize();
});

suite.add('vec3 scale', () => {
    vecA.clone().scale(scalar);
});

suite.add('vec3 xyDistanceTo', () => {
    vecA.xyDistanceTo(vecB);
});

suite.add('vec3 xzDistanceTo', () => {
    vecA.xzDistanceTo(vecB);
});

suite.add('vec3 yzDistanceTo', () => {
    vecA.yzDistanceTo(vecB);
});

suite.add('vec3 innerProduct', () => {
    vecA.innerProduct(vecB);
});

suite.add('vec3 manhattanDistanceTo', () => {
    vecA.manhattanDistanceTo(vecB);
});

suite.add('vec3 toArray', () => {
    vecA.toArray();
});

suite.run();
