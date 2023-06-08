import { strict as assert } from 'node:assert';
import { capitalize } from '../src/capitalize.js';

assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize('hello'), 'hello'); // err
