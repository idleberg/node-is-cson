// Modules
const { isCSON } = require('../dist/is-cson.cjs');

// Dependencies
const test = require('ava');
const fs = require('fs/promises');
const path = require('path');

// Tests
test('Valid CSON', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'fixtures/valid.cson'))).toString();

  const actual = isCSON(csonFile);
  const expected = true;

  t.is(expected, actual);
});

test('Invalid CSON', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'fixtures/invalid.cson'))).toString();

  const actual = isCSON(csonFile);
  const expected = true;

  t.not(expected, actual);
});

test('Null', async t => {
  const actual = isCSON(null);
  const expected = true;

  t.not(expected, actual);
});

test('Invalid JSON', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'fixtures/valid.json'))).toString();

  const actual = isCSON(csonFile, { strict: false });
  const expected = true;

  t.is(expected, actual);
});

test('Invalid JSON (strict)', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'fixtures/valid.json'))).toString();

  const actual = isCSON(csonFile,);
  const expected = true;

  t.not(expected, actual);
});

test('Valid JSON', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'fixtures/valid.json'))).toString();

  const actual = isCSON(csonFile, { strict: false });
  const expected = true;

  t.is(expected, actual);
});

test('Valid JSON (strict)', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'fixtures/valid.json'))).toString();

  const actual = isCSON(csonFile);
  const expected = true;

  t.not(expected, actual);
});
