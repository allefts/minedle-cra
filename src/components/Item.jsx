import React, { forwardRef } from "react";
import styled from "styled-components";
import gridStore from "../store/gridStore";

const StyledItem = styled.div`
  height: 100%;
  width: 100%;

  background-image: ${(props) => (props.url ? `url(${props.url})` : "")};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 48px 48px;

  position: relative;

  &:after {
    content: "";
    color: white;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    right: -130px;
    top: -30px;
    z-index: 2;
    font-size: 14px;
    line-height: 1.3;
  }

  &:hover:after {
    content: ${(props) => (props.name ? `"` + `${props.name}` + `"` : "")};
    padding: ${(props) => (props.name ? "0.25rem" : "0")};
    max-width: 150px;
    max-height: 50px;
  }
`;

const Item = forwardRef(
  ({ ingredientName, linkToImage, type, gridCellIdx }, ref) => {
    const { currDragItemRef, currDragOverRef } = ref;
    const fromInvToGrid = gridStore((state) => state.fromInvToGrid);
    const fromInvToPopulatedCell = gridStore(
      (state) => state.fromInvToPopulatedCell
    );
    const fromGridToEmptyCell = gridStore((state) => state.fromGridToEmptyCell);
    const fromGridToPopulatedGrid = gridStore(
      (state) => state.fromGridToPopulatedGrid
    );

    const dragStart = (e) => {
      currDragItemRef.current = e.target;
      // console.log(currDragItemRef.current);
    };

    const dragEnter = (e) => {
      currDragOverRef.current = e.target;
      // console.log(currDragOverRef.current);
    };

    const dropItem = (e) => {
      const currDragOverId = currDragOverRef.current.dataset.id;
      const currDragItemName = currDragItemRef.current.attributes.name.value;
      const currDragItemLink = currDragItemRef.current.dataset.url;

      // console.log("To", currDragOverRef.current);
      // console.log("From", currDragItemRef.current);

      //From Inv to Empty Cell
      if (type == "inv" && !currDragOverRef.current.draggable) {
        fromInvToGrid(currDragOverId, currDragItemName, currDragItemLink);
      }
      //From Populated Cell to Empty Cell
      else if (type == "grid" && !currDragOverRef.current.draggable) {
        const currDragItemId = currDragItemRef.current.dataset.id;
        fromGridToEmptyCell(
          currDragItemId,
          currDragOverId,
          currDragItemName,
          currDragItemLink
        );
      }
      //From Inv to Populated Cell
      else if (type == "inv" && currDragOverRef.current.draggable) {
        fromInvToPopulatedCell(
          currDragOverId,
          currDragItemName,
          currDragItemLink
        );
      }
      //From Populated Cell to Populated Cell
      else if (type == "grid" && currDragOverRef.current.draggable) {
        const currDragItemId = currDragItemRef.current.dataset.id;
        const currDragOverName = currDragOverRef.current.attributes.name.value;
        const currDragOverLink = currDragOverRef.current.dataset.url;

        fromGridToPopulatedGrid(
          currDragItemId,
          currDragItemName,
          currDragItemLink,
          currDragOverId,
          currDragOverName,
          currDragOverLink
        );
      }
    };

    if (ingredientName && linkToImage) {
      ingredientName = formatItemName(ingredientName);
    }

    //Inventory Cell
    return (
      <StyledItem
        draggable={true}
        url={linkToImage}
        name={ingredientName}
        data-url={linkToImage}
        data-id={gridCellIdx}
        onDragStart={(e) => dragStart(e)}
        onDragEnter={(e) => dragEnter(e)}
        onDragEnd={(e) => dropItem(e)}
      />
    );
  }
);

export default Item;

const formatItemName = (itemName) => {
  return itemName
    .replace("minecraft:", "")
    .replaceAll("_", " ")
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(" ");
};
