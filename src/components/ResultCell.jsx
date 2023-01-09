import styled from "styled-components";
import Borders from "./styles/Border";
import mineStore from "../store/minedleStore";

const StyledResultCell = styled(Borders.StyledCellBorder)`
  width: 72px;
  height: 72px;
  padding: 0.5rem;
  background-color: #8b8b8b;
  border-radius: 1.5px;

  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => (props.url ? `url(${props.url})` : "")};

  background-size: 48px 48px;

  position: relative;

  &:after {
    content: "";
    color: white;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    right: -130px;
    top: -30px;
    z-index: 2;
    font-size: 14px;
    line-height: 1.3;
  }

  &:hover:after {
    content: ${(props) => (props.name ? `"` + `${props.name}` + `"` : "")};
    padding: ${(props) => (props.name ? "0.25rem" : "0")};
    max-width: 150px;
    max-height: 50px;
  }
`;

const formatItemName = (itemName) => {
  return itemName
    .replace("minecraft:", "")
    .replaceAll("_", " ")
    .split(" ")
    .map((el) => el.toUpperCase())
    .join(" ");
};

// https://minedle-pictures.s3.us-east-2.amazonaws.com/note_block.png

const ResultCell = () => {
  const isCorrect = mineStore((state) => state.isCorrect);
  const resultItemName = formatItemName(
    mineStore((state) => state.resultItemName)
  );
  const linkName = resultItemName.toLowerCase().split(" ").join("_");

  if (isCorrect) {
    return (
      <StyledResultCell
        url={`https://minedle-pictures.s3.us-east-2.amazonaws.com/${linkName}.png`}
        name={resultItemName}
      />
    );
  } else {
    return <StyledResultCell />;
  }
};

export default ResultCell;

// height: 100%;
// width: 100%;

// background-image: ${(props) => (props.url ? `url(${props.url})` : "")};
// background-repeat: no-repeat;
// background-position: center;
// background-size: 48px 48px;

// position: relative;

// &:after {
//   content: "";
//   color: white;
//   background: rgba(0, 0, 0, 0.8);
//   position: absolute;
//   right: -130px;
//   top: -30px;
//   z-index: 2;
//   font-size: 14px;
//   line-height: 1.3;
// }

// &:hover:after {
//   content: ${(props) => (props.name ? `"` + `${props.name}` + `"` : "")};
//   padding: ${(props) => (props.name ? "0.25rem" : "0")};
//   max-width: 150px;
//   max-height: 50px;
// }
