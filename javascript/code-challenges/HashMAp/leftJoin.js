function leftJoin(leftHashMap, rightHashMap) {
  const result = {};

  for (const key in leftHashMap) {
    result[key] = [leftHashMap[key], rightHashMap[key] || null];
  }

  return result;
}
