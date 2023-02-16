/* eslint-disable no-param-reassign */
function sorted(characters, rules) {
  const sortedObj = [];
  for (const rule of rules) {
    for (const item in characters) {
      if (rule === item) {
        sortedObj.push({ key: item, value: characters[item] });
        delete characters[item];
      }
    }
  }
  const sortABC = Object.keys(characters)
    .sort()
    .reduce((obj, key) => {
      obj[key] = characters[key];
      return obj;
    }, {});
  for (const item in sortABC) {
    if (Object.prototype.hasOwnProperty.call(sortABC, item)) {
      sortedObj.push({ key: item, value: sortABC[item] });
    }
  }
  return sortedObj;
}

export default sorted;
