import path from 'path';
import fs from 'fs';
import { describe, expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const formats = ['json', 'yaml'];

describe('gendiff', () => {
  test.each(formats)('genDiff should work with %p', (format) => {
    const file1 = getFixturePath(`file1.${format}`);
    const file2 = getFixturePath(`file2.${format}`);

    expect(genDiff(file1, file2)).toEqual(readFile('expectedStylish.txt'));
    expect(genDiff(file1, file2, 'stylish')).toEqual(readFile('expectedStylish.txt'));
    expect(genDiff(file1, file2, 'plain')).toEqual(readFile('expectedPlain.txt'));
    expect(genDiff(file1, file2, 'json')).toEqual(readFile('expectedJSON.txt'));
  });
});
