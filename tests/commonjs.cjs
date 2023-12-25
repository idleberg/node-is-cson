const { isCSON } = require('../src/is-cson');
const { join } = require('node:path');
const { readFile } = require('node:fs/promises');
const { test } = require('uvu');
const assert = require('uvu/assert');

// Tests
test('Valid CSON', async () => {
  const csonFile = (await readFile(join(__dirname, 'fixtures/valid.cson'))).toString();

  const expected = true;
  const actual = isCSON(csonFile);

  assert.is(expected, actual);
});

test('Invalid CSON', async () => {
  const csonFile = (await readFile(join(__dirname, 'fixtures/invalid.cson'))).toString();

  const expected = true;
  const actual = isCSON(csonFile);

  assert.is.not(expected, actual);
});

test('Null', async () => {
  const expected = true;
  const actual = isCSON(null);

  assert.is.not(expected, actual);
});

test('Invalid JSON (allowJSON)', async () => {
  const csonFile = (await readFile(join(__dirname, 'fixtures/valid.json'))).toString();

  const expected = true;
  const actual = isCSON(csonFile, {
    allowJSON: true
  });

  assert.is(expected, actual);
});

test('Invalid JSON', async () => {
  const csonFile = (await readFile(join(__dirname, 'fixtures/valid.json'))).toString();

  const expected = true;
  const actual = isCSON(csonFile,);

  assert.is.not(expected, actual);
});

test('Valid JSON (allowJSON)', async () => {
  const csonFile = (await readFile(join(__dirname, 'fixtures/valid.json'))).toString();

  const expected = true;
  const actual = isCSON(csonFile, {
    allowJSON: true
  });

  assert.is(expected, actual);
});

test('Valid JSON', async () => {
  const csonFile = (await readFile(join(__dirname, 'fixtures/valid.json'))).toString();

  const actual = isCSON(csonFile);
  const expected = true;

  assert.is.not(expected, actual);
});

test.run();
