import { forwardRef } from "react";
import styled from "styled-components";
import gridStore from "../store/gridStore";

import EmptyCell from "./EmptyCell";
import PopulatedCell from "./PopulatedCell";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Grid = forwardRef((props, ref) => {
  const currentGrid = gridStore((state) => state.currentGrid);

  const renderGrid = () => {
    let gridToRender = currentGrid.map((gridCell, gridCellIdx) => {
      if (gridCell.empty) {
        return <EmptyCell key={gridCellIdx} id={gridCellIdx} ref={ref} />;
      } else {
        return (
          <PopulatedCell
            key={gridCellIdx}
            ref={ref}
            gridCellIdx={gridCellIdx}
            ingredientName={gridCell.ingredientName}
            linkToImage={gridCell.linkToImage}
            type={"grid"}
            addBorder={false}
          />
        );
      }
    });

    return gridToRender;
  };

  return <StyledGrid>{renderGrid()}</StyledGrid>;
});

export default Grid;
