const reverseString = function (text) {
  let result = text.split('');
  result.reverse();
  result = result.join('');

  return result;
};

// Do not edit below this line
module.exports = reverseString;
