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

  const expected = true;
  const actual = isCSON(csonFile);

  t.is(expected, actual);
});

test('Invalid CSON', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'test/fixtures/invalid.cson'))).toString();

  const expected = true;
  const actual = isCSON(csonFile);

  t.not(expected, actual);
});

test('Null', async t => {
  const expected = true;
  const actual = isCSON(null);

  t.not(expected, actual);
});

test('Invalid JSON (allowJSON)', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'test/fixtures/valid.json'))).toString();
  
  const expected = true;
  const actual = isCSON(csonFile, {
    allowJSON: true
  });

  t.is(expected, actual);
});

test('Invalid JSON', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'test/fixtures/valid.json'))).toString();

  const expected = true;
  const actual = isCSON(csonFile,);

  t.not(expected, actual);
});

test('Valid JSON (allowJSON)', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'test/fixtures/valid.json'))).toString();

  const expected = true;
  const actual = isCSON(csonFile, {
    allowJSON: true
  });

  t.is(expected, actual);
});

test('Valid JSON', async t => {
  const csonFile = (await fs.readFile(path.join(__dirname, 'test/fixtures/valid.json'))).toString();

  const expected = true;
  const actual = isCSON(csonFile);

  t.not(expected, actual);
});
