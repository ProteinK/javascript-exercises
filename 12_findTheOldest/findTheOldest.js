const findTheOldest = function (arr) {
  return arr.reduce((oldest, p) => {
    let oldAge = (oldest.yearOfDeath || 2022) - oldest.yearOfBirth;
    let age = (p.yearOfDeath || 2022) - p.yearOfBirth;
    if (age > oldAge) {
      oldest = p;
    }
    return oldest;
  }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
