import path from 'path';
import fs from 'fs';
import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('json files compare', () => {
  const expected = readFile('expectedCompareJSON.txt');
  const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  expect(actual).toBe(expected);
});

test('yaml files compare', () => {
  const expected = readFile('expectedCompareYAML.txt');
  const actual = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'));
  expect(actual).toBe(expected);
});
