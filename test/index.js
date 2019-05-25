// Modules
import { isCSON } from '../dist';

// Dependencies
import test from 'ava';
import fs from 'fs';
import { join } from 'path';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

// Tests
test('Valid', async t => {
  const csonFile = (await readFile(join(__dirname, 'fixtures/valid.cson'))).toString();

  const actual = isCSON(csonFile);
  const expected = true;

  t.is(expected, actual);
});

test('Invalid', async t => {
  const csonFile = (await readFile(join(__dirname, 'fixtures/invalid.cson'))).toString();

  const actual = isCSON(csonFile);
  const expected = true;

  t.not(expected, actual);
});

test('Null', async t => {
  const actual = isCSON(null);
  const expected = true;

  t.not(expected, actual);
});

test('Not JSON', async t => {
  const csonFile = (await readFile(join(__dirname, 'fixtures/valid.json'))).toString();

  const actual = isCSON(csonFile);
  const expected = true;

  t.not(expected, actual);
});
