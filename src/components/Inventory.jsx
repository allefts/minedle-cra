import React from "react";
import { forwardRef } from "react";
import styled from "styled-components";
import mineStore from "../store/minedleStore";
import gridStore from "../store/gridStore";
import PopulatedCell from "./PopulatedCell";

const StyledInventory = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const renderInventoryCells = (invItems, ref, timesChecked) => {
  let cells = [];
  let numBorders = 0;

  if ((timesChecked > 3 && timesChecked < 5) || timesChecked === 5) {
    numBorders = 9;
  } else if ((timesChecked > 5 && timesChecked < 7) || timesChecked === 7) {
    numBorders = 18;
  } else if (timesChecked > 8 || timesChecked === 8) {
    numBorders = invItems.length;
  }

  for (let i = 0; i < invItems.length; i++) {
    if (numBorders > i) {
      cells.push(
        <PopulatedCell
          key={i}
          ingredientName={invItems[i].Name}
          linkToImage={invItems[i].URL}
          ref={ref}
          type={"inv"}
          gridCellIdx={"-"}
          addBorder={true}
        />
      );
    } else {
      cells.push(
        <PopulatedCell
          key={i}
          ingredientName={invItems[i].Name}
          linkToImage={invItems[i].URL}
          ref={ref}
          type={"inv"}
          gridCellIdx={"-"}
          addBorder={false}
        />
      );
    }
  }
  return cells;
};

const Inventory = forwardRef((props, ref) => {
  const state = mineStore();
  const timesChecked = gridStore((state) => state.timesChecked);

  return (
    <StyledInventory>
      {renderInventoryCells(state.invItems, ref, timesChecked)}
    </StyledInventory>
  );
});

export default Inventory;
