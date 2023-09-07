function leftJoin(leftHashMap, rightHashMap) {
  const result = {};

  for (const key in leftHashMap) {
    result[key] = [leftHashMap[key], rightHashMap[key] || null];
  }

  return result;
}

const HashMap = require('./hashMap.test.js');


function isUnique(str) {
  
  const newStr = str.toLowerCase().replace(/\s/g, '');

  const hashMap = new HashMap();

  for (const char of newStr) {

    if (hashMap.has(char)) {
      return false;
    }

    hashMap.add(char);
  }
  return true;
}

