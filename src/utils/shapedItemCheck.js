const arrayEquals = (a, b) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};

const allRowsAndCols = ["XXX", "XX ", "X  "];
const allRowsNotAllCols = ["X", "X", "X"];
const notAllRowsButAllCols = ["XXX", "XXX"];
const notAllRowsAndNotAllCols = ["XX", "XX"];

const allPossibilities = [
  allRowsAndCols,
  notAllRowsButAllCols,
  allRowsNotAllCols,
  notAllRowsAndNotAllCols,
];

let receivedPattern = ["  X", "  X", "  X"];

for (const possib in allPossibilities) {
  //Result item dimensions
  let pattern = allPossibilities[possib];
  console.log("pattern", pattern);
  let numRows = allPossibilities[possib].length;
  const initRows = allPossibilities[possib].length;
  let numCols = allPossibilities[possib][0].length;
  const initCols = allPossibilities[possib][0].length;

  if (numRows === 3 && numCols === 3) {
    //Stairs = "XXX", "XX ", "X  "
    if (arrayEquals(receivedPattern, pattern)) {
      console.log("Correct: ", receivedPattern, pattern);
    }
  } else if (numRows != 3 && numCols === 3) {
    //Moves empty col to the end to facilitate checks
    if (
      receivedPattern[0] === "   " ||
      receivedPattern[0] === "  " ||
      receivedPattern[0] === " "
    ) {
      const shiftEl = receivedPattern.shift();
      receivedPattern.push(shiftEl);
    }
    //Boots = "X X", "X X"
    //"XXX", "XXX"
    //"X X", " X "
    //"XXX", "X X"
    //"XXX"
    //"X X", "XXX"
    //" X ", "XXX"
    //"X X"
    while (numRows != 3) {
      pattern.push("   ");
      numRows = pattern.length;
    }
    if (arrayEquals(receivedPattern, pattern)) {
      console.log("Correct: ", receivedPattern, pattern);
    } else if (initRows === 2) {
      //"X X", " X ", "   "
      //"   ", "X X", " X "
      //Check reverse
      const shiftItem = pattern.shift();
      pattern.push(shiftItem);
      if (arrayEquals(receivedPattern, pattern)) {
        console.log("Correct2: ", receivedPattern, pattern.reverse());
      }
    } else if (initRows === 1) {
      //"XXX", "   ", "   "
      //"   ", "XXX", "   "
      //"   ", "   ", "XXX"
      for (let i = 0; i < 3; i++) {
        let elShifted = pattern.shift();
        pattern.push(elShifted);
        // console.log(pattern);
        if (arrayEquals(pattern, receivedPattern)) {
          console.log("Correct3:", receivedPattern, pattern);
        }
      }
      //Only one column used
    }
  } else if (numRows === 3 && numCols != 3) {
    //Door = "XX", "XX", "XX"
    // "XX", "XX", " X"
    // "XX", " X", " X"
    // "X", "X", "X"
    // "X ", "X ", "XX"

    if (
      receivedPattern[0][0] === " " &&
      receivedPattern[1][0] === " " &&
      receivedPattern[2][0] === " "
    ) {
      for (let i = 0; i < 3; i++) {
        receivedPattern[i] += receivedPattern[i][0];
        //or " "
        receivedPattern[i] = receivedPattern[i].slice(1, 4);
      }
    }

    while (numCols != 3) {
      pattern[0] += " ";
      pattern[1] += " ";
      pattern[2] += " ";
      numCols = pattern[0].length;
    }
    if (arrayEquals(receivedPattern, pattern)) {
      console.log("Correct4:", receivedPattern, pattern);
    }

    if (initCols === 2) {
      // console.log(receivedPattern);
      // console.log(pattern);
    } else if (initCols === 1) {
      //Shift everything twice, check each shift
      for (let i = 0; i < 3; i++) {
        receivedPattern[i] += receivedPattern[i][0];
        receivedPattern[i] = receivedPattern[i].slice(1, 4);
      }

      if (arrayEquals(receivedPattern, pattern)) {
        console.log("Correct5:", receivedPattern, pattern);
      }

      for (let i = 0; i < 3; i++) {
        receivedPattern[i] += receivedPattern[i][0];
        receivedPattern[i] = receivedPattern[i].slice(1, 4);
      }

      if (arrayEquals(receivedPattern, pattern)) {
        console.log("Correct6:", receivedPattern, pattern);
      }
    }
  } else if (numRows != 3 && numCols != 3) {
    //Crafting Table = "XX", "XX"
    // "X ", " X"
    // "X", "X"
    while (numCols != 3) {
      pattern[0] += " ";
      pattern[1] += " ";
      pattern[2] += " ";
      numCols = pattern[0].length;
    }

    while (numRows != 3) {
      pattern.push("   ");
      numRows = pattern.length;
    }
  }
}

console.log(pattern);
console.log(receivedPattern);
