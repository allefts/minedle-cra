import styled from "styled-components";
import Borders from "./styles/Border";

const StyledMain = styled(Borders.StyledMainBorder)`
  background-color: #c6c6c6;
  padding: 1rem;
  margin: 0 auto;
  max-width: 612px;

  display: flex;
  flex-direction: column;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
