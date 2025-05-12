const palindromes = function (str) {
  let toCompare = str.replace(/\W/gm, '');
  let result = toCompare.split('').reverse().join('');
  return toCompare.toLowerCase() === result.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
