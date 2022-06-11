// Code your solution here

  function findMatching(drivers, match) {
    return drivers.filter(
      (matchingLetters) => matchingLetters.toLowerCase() === match.toLowerCase()
    );
  }
  
  function fuzzyMatch(drivers, lettersMatch) {
    return drivers.filter(
      (matchingLetters) => matchingLetters.toLowerCase().indexOf(lettersMatch.toLowerCase())===0
    );
  }
  
  function matchName(drivers, nameMatch) {
    return drivers.filter((results) =>results.name === nameMatch);
  }