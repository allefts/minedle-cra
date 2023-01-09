import create from "zustand";

const arrayEquals = (a, b) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};

const formatItemName = (itemName) => {
  return itemName
    .replace("minecraft:", "")
    .replaceAll("_", " ")
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(" ");
};

const gridStore = create((set, get) => ({
  currentGrid: [
    { id: 0, empty: true, ingredientName: "", linkToImage: "" },
    { id: 1, empty: true, ingredientName: "", linkToImage: "" },
    { id: 2, empty: true, ingredientName: "", linkToImage: "" },
    { id: 3, empty: true, ingredientName: "", linkToImage: "" },
    { id: 4, empty: true, ingredientName: "", linkToImage: "" },
    { id: 5, empty: true, ingredientName: "", linkToImage: "" },
    { id: 6, empty: true, ingredientName: "", linkToImage: "" },
    { id: 7, empty: true, ingredientName: "", linkToImage: "" },
    { id: 8, empty: true, ingredientName: "", linkToImage: "" },
  ],

  timesChecked: 1,
  incTimesChecked: () =>
    set((state) => ({
      timesChecked: state.timesChecked + 1,
    })),

  fromInvToGrid: (id, ingredientName, linkToImage) =>
    set((state) => ({
      currentGrid: state.currentGrid.map((currGridItem, gridIdx) => {
        // console.log(id, currGridItem.id, ingredientName, linkToImage);
        if (id == currGridItem.id) {
          currGridItem.empty = false;
          currGridItem.ingredientName = ingredientName;
          currGridItem.linkToImage = linkToImage;
        }
        return currGridItem;
      }),
    })),

  fromInvToPopulatedCell: (id, ingredientName, linkToImage) =>
    set((state) => ({
      currentGrid: state.currentGrid.map((currGridItem, gridIdx) => {
        // console.log(id, currGridItem.id, ingredientName, linkToImage);
        if (id == currGridItem.id) {
          currGridItem.ingredientName = ingredientName;
          currGridItem.linkToImage = linkToImage;
        }
        return currGridItem;
      }),
    })),

  fromGridToPopulatedGrid: (
    gridOverIdFrom,
    ingredientNameFrom,
    linkToImageFrom,
    gridOverIdTo,
    ingredientNameTo,
    linkToImageTo
  ) =>
    set((state) => ({
      currentGrid: state.currentGrid.map((currGridItem, gridIdx) => {
        if (gridIdx == gridOverIdTo) {
          currGridItem.ingredientName = ingredientNameFrom;
          currGridItem.linkToImage = linkToImageFrom;
        } else if (gridIdx == gridOverIdFrom) {
          currGridItem.ingredientName = ingredientNameTo;
          currGridItem.linkToImage = linkToImageTo;
        }
        return currGridItem;
      }),
    })),

  fromGridToEmptyCell: (itemId, gridOverId, ingredientName, linkToImage) =>
    set((state) => ({
      currentGrid: state.currentGrid.map((currGridItem, gridIdx) => {
        if (gridIdx == gridOverId) {
          currGridItem.empty = false;
          currGridItem.ingredientName = ingredientName;
          currGridItem.linkToImage = linkToImage;
        } else if (gridIdx == itemId) {
          currGridItem.empty = true;
          currGridItem.ingredientName = "";
          currGridItem.linkToImage = "";
        }
        return currGridItem;
      }),
    })),

  resetGrid: () =>
    set((state) => ({
      currentGrid: [
        { id: 0, empty: true, ingredientName: "", linkToImage: "" },
        { id: 1, empty: true, ingredientName: "", linkToImage: "" },
        { id: 2, empty: true, ingredientName: "", linkToImage: "" },
        { id: 3, empty: true, ingredientName: "", linkToImage: "" },
        { id: 4, empty: true, ingredientName: "", linkToImage: "" },
        { id: 5, empty: true, ingredientName: "", linkToImage: "" },
        { id: 6, empty: true, ingredientName: "", linkToImage: "" },
        { id: 7, empty: true, ingredientName: "", linkToImage: "" },
        { id: 8, empty: true, ingredientName: "", linkToImage: "" },
      ],
    })),

  checkGrid: (
    resultItemName,
    resultItemType,
    resultItemIngredients,
    resultItemPattern,
    resultItemKeys
  ) => {
    // console.log(resultItemName);

    //If item is shapeless
    if (resultItemType === "shapeless") {
      //Check Ingredients
      let itemsInGrid = gridStore
        .getState()
        .currentGrid.map((gridItem) => {
          return gridItem.ingredientName;
        })
        .filter((item) => item != "")
        .sort();
      const resItems = resultItemIngredients
        .map((resItem) => {
          return formatItemName(resItem[0].Value);
        })
        .sort();

      if (arrayEquals(itemsInGrid, resItems)) {
        return true;
      } else {
        return false;
      }
    } else if (resultItemType === "shaped") {
      //If item is shaped
      // console.log("Item: ", resultItemName);
      // console.log("Res Pattern: ", resultItemPattern);
      // console.log("Res Keys: ", resultItemKeys);

      let numRows = resultItemPattern.length;
      let numCols = resultItemPattern[0].length;
      let initRows = resultItemPattern.length;
      let initCols = resultItemPattern[0].length;

      // console.log("Num Rows:", numRows);
      // console.log("Num Cols:", numCols);

      const itemsInGrid = gridStore.getState().currentGrid.map((gridItem) => {
        return gridItem.ingredientName;
      });

      for (const itemInGridIdx in itemsInGrid) {
        for (const resultKeyItemIdx in resultItemKeys) {
          if (
            formatItemName(resultItemKeys[resultKeyItemIdx].Value[0].Value) ===
            itemsInGrid[itemInGridIdx]
          ) {
            itemsInGrid[itemInGridIdx] = resultItemKeys[resultKeyItemIdx].Key;
          }
        }
      }

      // console.log("itemsInGrid", itemsInGrid);

      for (const gridEl in itemsInGrid) {
        if (itemsInGrid[gridEl] === "") {
          itemsInGrid[gridEl] = " ";
        }
      }

      let groupedGrid = [
        itemsInGrid.slice(0, 3).join(""),
        itemsInGrid.slice(3, 6).join(""),
        itemsInGrid.slice(6, 10).join(""),
      ];

      //Result item dimensions
      let pattern = [...resultItemPattern];
      let receivedPattern = [...groupedGrid];

      if (numRows === 3 && numCols === 3) {
        //Stairs = "XXX", "XX ", "X  "
        if (arrayEquals(receivedPattern, pattern)) {
          return true;
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
          return true;
        } else if (initRows === 2) {
          //"X X", " X ", "   "
          //"   ", "X X", " X "
          //Check reverse
          const shiftItem = receivedPattern.shift();
          receivedPattern.push(shiftItem);
          if (arrayEquals(receivedPattern, pattern)) {
            return true;
          }
        } else if (initRows === 1) {
          //"XXX", "   ", "   "
          //"   ", "XXX", "   "
          //"   ", "   ", "XXX"
          for (let i = 0; i < 3; i++) {
            let elShifted = receivedPattern.shift();
            receivedPattern.push(elShifted);
            if (arrayEquals(pattern, receivedPattern)) {
              return true;
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
          return true;
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
            return true;
          }

          for (let i = 0; i < 3; i++) {
            receivedPattern[i] += receivedPattern[i][0];
            receivedPattern[i] = receivedPattern[i].slice(1, 4);
          }

          if (arrayEquals(receivedPattern, pattern)) {
            return true;
          }
        }
      } else if (numRows != 3 && numCols != 3) {
        // console.log(receivedPattern);

        if (
          receivedPattern[0] != "   " &&
          receivedPattern[2] != "   " &&
          numRows === 2
        ) {
          //Item is split
          return false;
        }

        receivedPattern = receivedPattern.filter((row) => row != "   ");
        // console.log("filter hype", receivedPattern);

        if (receivedPattern.length != numRows) {
          return false;
        }

        //Only one/two rows left, have to format cols to have no whitespace
        let idxsUsed = [];
        for (const rowIdx in receivedPattern) {
          let tempCol = receivedPattern[rowIdx].split("");
          // console.log(tempCol);

          //NEED TO FIX FOR FLINT AND STEEL AND CARROT ON A STICK
          for (const colIdx in tempCol) {
            if (tempCol[colIdx] != " " && !idxsUsed.includes(colIdx)) {
              idxsUsed.push(colIdx);
            }
          }

          if (idxsUsed.length != numCols) {
            return false;
          }

          // console.log("TempCol: ", tempCol);

          if (tempCol[0] != " " && tempCol[2] != " " && numCols === 2) {
            return false;
          }

          tempCol = tempCol.filter((colEl, idx) => {
            if (numCols === 1) {
              return colEl != " ";
            } else if (numCols === 2) {
              return colEl != " ";
            }
          });

          if (tempCol.length != numCols) {
            return false;
          }
          receivedPattern[rowIdx] = tempCol.join("");
        }
        // console.log("dsadsa", receivedPattern);
      }
      // console.log("Received and Answer: ", receivedPattern, pattern);

      if (arrayEquals(receivedPattern, pattern)) {
        return true;
      } else {
        return false;
      }
    }
  },
}));

export default gridStore;
