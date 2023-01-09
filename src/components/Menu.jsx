import React, { useState } from "react";
import styled from "styled-components";
import Borders from "./styles/Border";
import Buttons from "./styles/MinecraftButton";
import gridStore from "../store/gridStore";
import mineStore from "../store/minedleStore";

//Button Bgs
import btn1 from "../assets/btn1.png";
import btn2 from "../assets/btn2.png";

const StyledMenu = styled(Borders.StyledMainBorder)`
  background-color: #c6c6c6;
  padding: 1rem;
  margin: 5rem auto 0 auto;
  width: 612px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

// const StyledPopulatedCell = styled(Borders.StyledCellBorder)`

const StyledButton = styled(Buttons.StyledMinecraftButton)`
  height: 30px;
  width: 150px;
  margin: 0 1rem;
`;

const StyledAns = styled.h3`
  color: ${(props) => (props.isCorrect ? "green" : "red")};
`;

const Menu = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const resetGrid = gridStore((state) => state.resetGrid);
  const checkGrid = gridStore((state) => state.checkGrid);
  const storeCorrect = mineStore((state) => state.isCorrect);
  const setStoreCorrect = mineStore((state) => state.setIsCorrect);
  const timesChecked = gridStore((state) => state.timesChecked);
  const incTimesChecked = gridStore((state) => state.incTimesChecked);

  let {
    resultItemName,
    resultItemType,
    resultItemIngredients,
    resultItemPattern,
    resultItemKeys,
    currentItemIngredients,
    currentItemPattern,
  } = mineStore();

  //Checks if there is actually an item
  if (resultItemName && resultItemType) {
    let arr = formatNameAndType(resultItemName, resultItemType);
    resultItemName = arr[0];
    resultItemType = arr[1];

    // console.log("Item: ", resultItemName);
    // console.log("Type:", resultItemType);
    // console.log("Res Ingredients: ", resultItemIngredients);
    // console.log("Res Pattern: ", resultItemPattern);
    // console.log("Res Keys: ", resultItemKeys);
    // console.log("Curr Item Ingred: ", currentItemIngredients);
    // console.log("Curr Item Pattern: ", currentItemPattern);
  }

  const handleCheckGrid = () => {
    incTimesChecked();
    let ans = checkGrid(
      resultItemName,
      resultItemType,
      resultItemIngredients,
      resultItemPattern,
      resultItemKeys
    );

    setStoreCorrect(ans);
    ans ? setIsCorrect(true) : setIsCorrect(false);
  };

  return (
    <StyledMenu>
      <div>
        <StyledButton onClick={() => handleCheckGrid()}>Check</StyledButton>
        <StyledButton onClick={() => resetGrid()}>Clear</StyledButton>
      </div>
      <h3>#{timesChecked - 1}</h3>
      <StyledAns isCorrect={isCorrect}>
        {!isCorrect ? "Incorrect" : "Correct"}
      </StyledAns>
    </StyledMenu>
  );
};

const formatNameAndType = (name, type) => {
  let newName = name
    .replace("minecraft:", "")
    .replaceAll("_", " ")
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(" ");

  let newType = type.replace("minecraft:crafting_", "");

  return [newName, newType];
};

export default Menu;
