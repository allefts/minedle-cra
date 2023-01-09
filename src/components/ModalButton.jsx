import React, { useState } from "react";
import Buttons from "./styles/MinecraftButton";
import book from "../assets/book.png";
import styled from "styled-components";
import InstructionModal from "./InstructionModal";

const StyledModalButton = styled(Buttons.StyledMinecraftButton)`
  position: absolute;
  top: 23.5%;
  left: 20%;
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <StyledModalButton onClick={() => setIsOpen(true)}>
        <img src={book} />
      </StyledModalButton>
      {isOpen && <InstructionModal setIsOpen={setIsOpen} />}
    </React.Fragment>
  );
};

export default ModalButton;
