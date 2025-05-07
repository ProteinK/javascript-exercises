const removeFromArray = function (arr, ...nums) {
  const result = [...arr];
  for (num of nums) {
    let index = result.indexOf(num);
    while (index !== -1) {
      result.splice(index, 1);
      index = result.indexOf(num);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
