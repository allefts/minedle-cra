import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import book from "../../assets/Book.png";

const StyledHomePage = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHomeMain = styled.div`
  margin: 0 auto;
  max-width: 612px;

  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <StyledHomeMain>
        {/* <h1>Welcome to the minedle!</h1>
        <h2>
          A wordle clone set in the Minecraft universe. Each day your crafting
          knowledge will be put to the test!
        </h2>
        <h3>Instructions: </h3>
        <ul>
          <li>Drag and drop items from your inventory onto the grid.</li>
          <li>Click the "Check" button to test your answer.</li>
          <li>Click the "Clear" button to clear the grid.</li>
          <li>
            If you are struggling, after a certain number of attemps, hints will
            be given through the inventory
          </li>
        </ul> */}
      </StyledHomeMain>
    </StyledHomePage>
  );
};

export default HomePage;
