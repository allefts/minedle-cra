import React, { forwardRef } from "react";
import Borders from "./styles/Border";
import styled from "styled-components";
import Item from "./Item";

const StyledCell = styled(Borders.StyledCellBorder)`
  width: 64px;
  height: 64px;
  background-color: #8b8b8b;
  border-radius: 1.5px;
`;

const Cell = forwardRef(({ linkToImage, ingredientName, cellId }, ref) => {
  return (
    <StyledCell>
      <Item
        ref={ref}
        linkToImage={linkToImage}
        ingredientName={ingredientName}
        cellId={cellId}
      />
    </StyledCell>
  );
});

export default Cell;
