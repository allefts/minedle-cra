import styled from "styled-components";
import arrow from "../assets/arrow.png";

const StyledArrow = styled.p``;

const Arrow = () => {
  return (
    <StyledArrow>
      <img height="56px" width="72px" src={arrow} />
    </StyledArrow>
  );
};

export default Arrow;
