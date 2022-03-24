const palindromes = function (str) {
  str = str.replace(/[!,.\s]/g, '');
  str = str.toLowerCase();
  let reversed = str.split('').reverse().join('');
  return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
