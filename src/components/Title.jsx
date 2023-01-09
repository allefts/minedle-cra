import styled from "styled-components";

const StyledTitle = styled.div`
  text-align: center;
  font-size: 5rem;
  padding: 2rem 0;
  font-family: "Minecrafter.Reg";
  letter-spacing: 1.2pt;
  color: #a49a98;
  text-shadow: 0 1px 0 #1a1a1c, 0 2px 0 #1a1a1c, 0 3px 0 #1a1a1c,
    0 4px 0 #1a1a1c, 0 5px 0 #1a1a1c, 0 6px 0 #1a1a1c, 0 7px 0 #1a1a1c,
    0 8px 0 #1a1a1c, 0 9px 0 #1a1a1c, 0 10px 0 #1a1a1c, 0 11px 0 #1a1a1c,
    0 12px 0 #1a1a1c, 0 20px 30px rgba(0, 0, 0, 0.5);
`;

const Title = () => {
  return <StyledTitle>MINEDLE</StyledTitle>;
};

export default Title;
