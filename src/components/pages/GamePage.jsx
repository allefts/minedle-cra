import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import mineStore from "../../store/minedleStore";
import Title from "../Title";
import Menu from "../Menu";
import Main from "../Main";
import TopMain from "../TopMain";
import BottomMain from "../BottomMain";

const StyledGamePage = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GamePage = () => {
  const populateResult = mineStore((state) => state.populateResult);
  const currDragItem = useRef(null);
  const currDragOverItem = useRef(null);

  const ref = {
    currDragItemRef: currDragItem,
    currDragOverRef: currDragOverItem,
  };

  useEffect(() => {
    populateResult();
  }, []);

  return (
    <StyledGamePage>
      {/* <Title /> */}
      <Main>
        <TopMain ref={ref} />
        <BottomMain ref={ref} />
      </Main>
      <Menu />
    </StyledGamePage>
  );
};

export default GamePage;
