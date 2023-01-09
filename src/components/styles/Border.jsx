import styled from "styled-components";

const StyledCellBorder = styled.div`
  border-right: 3px solid #fcfcfc;
  border-bottom: 3px solid #fcfcfc;
  border-left: 3px solid #353535;
  border-top: 3px solid #353535;
`;

const StyledMainBorder = styled.div`
  border-top: 3px solid #fcfcfc;
  border-left: 3px solid #fcfcfc;
  border-bottom: 3px solid #545454;
  border-right: 3px solid #545454;
  border-radius: 2px;
`;

const Borders = { StyledCellBorder, StyledMainBorder };

export default Borders;
