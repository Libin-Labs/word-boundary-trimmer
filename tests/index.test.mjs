import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('truncates before next word', () => {
  assert.equal(api.truncateAtWord('one two three', 7), 'one two');
});
test('leaves short text unchanged', () => {
  assert.equal(api.truncateAtWord('short', 10), 'short');
});
test('returns empty when no word fits', () => {
  assert.equal(api.truncateAtWord('longword next', 3), 'lon');
});
test('supports zero limit', () => {
  assert.equal(api.truncateAtWord('abc', 0), '');
});
test('does not add suffix', () => {
  assert.equal(api.truncateAtWord('a b c', 2), 'a');
});
test('rejects negative limit', () => {
  assert.throws(() => api.truncateAtWord('x', -1), RangeError);
});
