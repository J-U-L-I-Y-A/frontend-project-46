import fs from 'fs';
import path from 'path';
import _ from "lodash";

const getDataFromFile = (filepath) => {
    const fullPath = path.resolve(process.cwd(), filepath);
    return fs.readFileSync(fullPath, 'utf-8');
};

// const getExtension = path.extname(filepath);

const parsedJsonInObj = (data) => JSON.parse(data);

const genDiff = (filepath1, filepath2) => {
    const data1 = getDataFromFile(filepath1);
    const data2 = getDataFromFile(filepath2);
    const obj1 = parsedJsonInObj(data1);
    const obj2 = parsedJsonInObj(data2);
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const unionKeys = _.union(keys1, keys2);
    const sortedKeys = _.sortBy(unionKeys);

    const result = sortedKeys.reduce((acc, key) => {
        if (!_.has(obj1, key)) {
            acc.push(`+ ${key}: ${obj2[key]}\n`);
        } else if (!_.has(obj2, key)) {
            acc.push(`- ${key}: ${obj1[key]}\n`);
        } else if (obj1[key] === obj2[key]) {
            acc.push(`  ${key}: ${obj1[key]}\n`);
        } else if (obj1[key] !== obj2[key]) {
            acc.push(`- ${key}: ${obj1[key]}\n`);
            acc.push(`+ ${key}: ${obj2[key]}\n`);
        }
        return acc;
    }, []);
    return `{\n${result.join('')}\n}`;
};
export default genDiff;
