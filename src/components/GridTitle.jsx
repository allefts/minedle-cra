import styled from "styled-components";

const StyledGridTitle = styled.div`
  color: #353535;
  font-weight: bold;
  padding: 0.5rem 0;
`;

const GridTitle = ({ word }) => {
  return (
    <StyledGridTitle>
      <h3>{word}</h3>
    </StyledGridTitle>
  );
};

export default GridTitle;
