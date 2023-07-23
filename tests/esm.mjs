// Modules
import { isCSON } from '../src/is-cson';

// Dependencies
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { promises as fs } from 'node:fs';
import path from 'node:path';

// Tests
test('Valid CSON', async t => {
  const csonFile = (await fs.readFile(path.join(process.cwd(), 'tests/fixtures/valid.cson'))).toString();

  const expected = true;
  const actual = isCSON(csonFile);

  assert.is(expected, actual);
});

test('Invalid CSON', async t => {
  const csonFile = (await fs.readFile(path.join(process.cwd(), 'tests/fixtures/invalid.cson'))).toString();

  const expected = true;
  const actual = isCSON(csonFile);

  assert.is.not(expected, actual);
});

test('Null', async t => {
  const expected = true;
  const actual = isCSON(null);

  assert.is.not(expected, actual);
});

test('Invalid JSON (allowJSON)', async t => {
  const csonFile = (await fs.readFile(path.join(process.cwd(), 'tests/fixtures/valid.json'))).toString();

  const expected = true;
  const actual = isCSON(csonFile, {
    allowJSON: true
  });

  assert.is(expected, actual);
});

test('Invalid JSON', async t => {
  const csonFile = (await fs.readFile(path.join(process.cwd(), 'tests/fixtures/valid.json'))).toString();

  const expected = true;
  const actual = isCSON(csonFile,);

  assert.is.not(expected, actual);
});

test('Valid JSON (allowJSON)', async t => {
  const csonFile = (await fs.readFile(path.join(process.cwd(), 'tests/fixtures/valid.json'))).toString();

  const expected = true;
  const actual = isCSON(csonFile, {
    allowJSON: true
  });

  assert.is(expected, actual);
});

test('Valid JSON', async t => {
  const csonFile = (await fs.readFile(path.join(process.cwd(), 'tests/fixtures/valid.json'))).toString();

  const expected = true;
  const actual = isCSON(csonFile);

  assert.is.not(expected, actual);
});

test.run();
