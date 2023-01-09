//Arr Idx === Row
//String Idx === Col

//Bowl: ["# #", " # "]
//Brick Wall: ["###", "###"]
//Chain: ["N","I","N"]
//Chiseled Nether Bricks: ["#","#"]
//Cobbled Deepslate Slab: ["###"]
//Crafting Table: ["##","##"]
//Pressure Plate:  ["##"]
//End Rod: ["/","#"]
//Door:  ["##","##","##"]
//Axe: ["XX","X#"," #"]

// //Check Pattern and Key
// const newResultItemMap = resultItemKeys.map((resItem, resIdx) => {
//     return {
//       key: resItem.Key,
//       name: formatItemName(resItem.Value[0].Value),
//     };
//   });

//   const itemsInGrid = currGrid.map((gridItem) => {
//     return gridItem.ingredientName;
//   });

//   const resPatternJoined = resultItemPattern.join("").split("");

//   console.log(resPatternJoined);

//   for (const resKey in resPatternJoined) {
//     for (const itemKey in newResultItemMap) {
//       if (resPatternJoined[resKey] === newResultItemMap[itemKey].key) {
//         resPatternJoined[resKey] = newResultItemMap[itemKey].name;
//       } else if (resPatternJoined[resKey] == " ") {
//         itemsInGrid[resKey] = " ";
//       }
//     }
//   }

//   //resPatternJoined is final result array
//   console.log(itemsInGrid, resPatternJoined);
//   arrayEquals(itemsInGrid, resPatternJoined)
//     ? setIsCorrect(true)
//     : setIsCorrect(false);
