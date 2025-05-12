const findTheOldest = function (arr) {
  const sorted = arr.toSorted((a, b) => {
    const currentYear = new Date().getFullYear();
    let ageA = (a.yearOfDeath ?? currentYear) - a.yearOfBirth;
    let ageB = (b.yearOfDeath ?? currentYear) - b.yearOfBirth;
    return ageB - ageA;
  });

  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
