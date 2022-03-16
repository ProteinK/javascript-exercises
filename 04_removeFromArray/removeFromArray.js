const removeFromArray = function (arr, ...args) {
  let result = arr;

  for (let i = 0; i < args.length; i++) {
    const index = result.findIndex(e => e === args[i]);
    if (index !== -1) {
      result.splice(index, 1);
    }
  }

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
