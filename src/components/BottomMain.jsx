import React from "react";
import { forwardRef } from "react";
import styled from "styled-components";
import GridTitle from "./GridTitle";
import Inventory from "./Inventory";

const StyledBottomMain = styled.div``;

const BottomMain = forwardRef((props, ref) => {
  return (
    <StyledBottomMain>
      <GridTitle word="Inventory" />
      <Inventory ref={ref} />
    </StyledBottomMain>
  );
});

export default BottomMain;
