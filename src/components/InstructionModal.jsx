import React from "react";
import styled from "styled-components";
import Buttons from "./styles/MinecraftButton";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const StyledInstructionModal = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 1;
  top: 0;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled.div`
  background: #c6c6c6;
  width: 800px;
  height: 800px;

  padding: 1rem;

  border-top: 3px solid #fcfcfc;
  border-left: 3px solid #fcfcfc;
  border-right: 3px solid #545454;
  border-bottom: 3px solid #545454;

  font-family: Ubuntu, sans-serif;
`;

const CloseButton = styled(Buttons.StyledMinecraftButton)`
  float: right;
  width: 25px;
`;

const ModalTitle = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;

const ModalDesc = styled.p`
  text-align: center;
  margin: 1rem 0;
`;

const StyledInstructions = styled.ul`
  margin: 1rem 0;
  list-style: none;

  & > * {
    margin: 0.5rem 0;
  }
`;

const StyledInstruction = styled.li`
  padding: 1rem 0;
  font-size: 1.25rem;
  image-rendering: pixelated;
  color: #ffffff;
  text-align: center;
  user-select: none;
  background: #999 url("https://i.ibb.co/rb2TWXL/bgbtn.png") center / cover;
  line-height: 26px;
  box-shadow: inset -1px -2px #0006, inset 1px 1px #fff7;
  border: 2px solid #000;

  text-shadow: 2px 2px #000a;
`;

const StyledIcons = styled.div`
  display: flex;
  margin: 0 1rem;
  float: right;
`;

const StyledIcon = styled.div`
  margin: 0 0.5rem;
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: all 300ms ease;

    &:hover {
      color: #6d6d6d;
    }
  }
`;

const Portfolio = styled.a`
  text-decoration: underline;
  color: inherit;
  transition: all 300ms ease;

  &:hover {
    color: #6d6d6d;
  }
`;

const MadeBy = styled.div``;

const InstructionModal = ({ setIsOpen }) => {
  return (
    <StyledInstructionModal>
      <StyledModal>
        <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
        <ModalTitle>Welcome to the Minedle!</ModalTitle>
        <ModalDesc>
          The ultimate test of Minecraft crafting knowledge.
        </ModalDesc>
        <h2>Instructions:</h2>
        <StyledInstructions>
          <StyledInstruction>
            Drag and Drop items from your inventory onto the grid.
          </StyledInstruction>
          <StyledInstruction>
            Press "Check" button to check your answer.
          </StyledInstruction>
          <StyledInstruction>
            Press "Clear" to reset the grid.
          </StyledInstruction>
        </StyledInstructions>
        <h2>Tips: </h2>
        <StyledInstructions>
          <StyledInstruction style={{ border: "3px solid red" }}>
            Not used within the recipe.
          </StyledInstruction>
          <StyledInstruction style={{ border: "3px solid green" }}>
            Used within the recipe.
          </StyledInstruction>
          <StyledInstruction>
            SHEARS cannot be crafted, don't worry about crafting them.
          </StyledInstruction>
          <StyledInstruction>Recipe changes every 24 hours.</StyledInstruction>
        </StyledInstructions>
        <MadeBy>
          <StyledIcons>
            <StyledIcon>
              <a
                href="https://github.com/allefts"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub />
              </a>
            </StyledIcon>
            <StyledIcon>
              <a
                href="https://linkedin.com/in/allefts"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin />
              </a>
            </StyledIcon>
          </StyledIcons>
          <p>Made by: Allef Soares</p>
          <Portfolio
            href="https://allefts.xyz"
            rel="noreferrer"
            target="_blank"
          >
            Portfolio
          </Portfolio>
        </MadeBy>
      </StyledModal>
    </StyledInstructionModal>
  );
};

export default InstructionModal;
