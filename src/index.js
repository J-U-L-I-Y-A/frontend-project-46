import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import formatData from './formatters/index.js';

const getFormat = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  return parse(fs.readFileSync(fullPath, 'utf-8'), getFormat(filepath));
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const tree = buildTree(data1, data2);

  return formatData(tree, formatName);
};

export default genDiff;
