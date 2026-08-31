import assert from 'node:assert'
import { greet } from './index.js'

assert.equal(greet('piotr'), 'hello piotr')
assert.equal(greet(), 'hello world')
console.log('ok')
