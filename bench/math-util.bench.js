import { Suite } from 'bench-node';
import { euclideanMod } from '../dist/math-util.js';

const suite = new Suite();

suite.add('euclideanMod positive numbers', () => {
    euclideanMod(12345, 67);
});

suite.add('euclideanMod negative numerator', () => {
    euclideanMod(-12345, 67);
});

suite.add('euclideanMod negative denominator', () => {
    euclideanMod(12345, -67);
});

suite.add('euclideanMod both negative', () => {
    euclideanMod(-12345, -67);
});


suite.run();
