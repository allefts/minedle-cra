import React, { forwardRef } from "react";
import styled from "styled-components";
import Borders from "./styles/Border";

const StyledEmptyCell = styled(Borders.StyledCellBorder)`
  width: 64px;
  height: 64px;
  background-color: #8b8b8b;
  border-radius: 1.5px;
`;

const EmptyCell = forwardRef(({ id }, ref) => {
  const { currDragItemRef, currDragOverRef } = ref;
  //ref ONLY RECEIVES THE ITEM BEING DRAGGED, NOT THE PLACE BEING DRAGGED OVER
  const handleDragEnter = (e) => {
    currDragOverRef.current = e.target;
    // console.log(ref.current);
  };

  return (
    <StyledEmptyCell
      data-id={id}
      onDragEnter={(e) => handleDragEnter(e, ref)}
    />
  );
});

export default EmptyCell;
