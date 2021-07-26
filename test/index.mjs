// Modules
import { isCSON } from '../dist/is-cson.mjs';

// Dependencies
import test from 'ava';
import fs from 'fs/promises';
import path from 'path';

const __dirname = path.resolve(path.dirname(''));

// Tests
test('Valid CSON', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'test/fixtures/valid.cson'))).toString();

  const actual = isCSON(csonFile);
  const expected = true;

  t.is(expected, actual);
});

test('Invalid CSON', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'test/fixtures/invalid.cson'))).toString();

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
  const csonFile = (await fs.readFile(path.join(__dirname, 'test/fixtures/valid.json'))).toString();

  const actual = isCSON(csonFile, { strict: false });
  const expected = true;

  t.is(expected, actual);
});

test('Invalid JSON (strict)', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'test/fixtures/valid.json'))).toString();

  const actual = isCSON(csonFile,);
  const expected = true;

  t.not(expected, actual);
});

test('Valid JSON', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'test/fixtures/valid.json'))).toString();

  const actual = isCSON(csonFile, { strict: false });
  const expected = true;

  t.is(expected, actual);
});

test('Valid JSON (strict)', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'test/fixtures/valid.json'))).toString();

  const actual = isCSON(csonFile);
  const expected = true;

  t.not(expected, actual);
});
