import path from 'path';
import fs from 'fs';
import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('json', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');

  expect(genDiff(file1, file2)).toEqual(readFile('expectedStylish.txt'));
  expect(genDiff(file1, file2, 'stylish')).toEqual(readFile('expectedStylish.txt'));
  expect(genDiff(file1, file2, 'plain')).toEqual(readFile('expectedPlain.txt'));
  expect(genDiff(file1, file2, 'json')).toEqual(readFile('JSON.txt'));
});

test('yaml/yml', () => {
  const file3 = getFixturePath('file1.yaml');
  const file4 = getFixturePath('file2.yaml');

  expect(genDiff(file3, file4)).toEqual(readFile('expectedStylish.txt'));
  expect(genDiff(file3, file4, 'stylish')).toEqual(readFile('expectedStylish.txt'));
  expect(genDiff(file3, file4, 'plain')).toEqual(readFile('expectedPlain.txt'));
  expect(genDiff(file3, file4, 'json')).toEqual(readFile('expectedJSON.txt'));
});
