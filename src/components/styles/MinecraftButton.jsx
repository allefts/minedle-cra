import styled from "styled-components";

const StyledMinecraftButton = styled.button`
  font-family: "77MinecraftRegular";
  outline: 0;
  text-decoration: none;
  image-rendering: pixelated;
  color: #ddd;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  background: #999 url("https://i.ibb.co/rb2TWXL/bgbtn.png") center / cover;
  line-height: 26px;
  box-shadow: inset -2px -4px #0006, inset 2px 2px #fff7;
  text-shadow: 2px 2px #000a;
  border: 2px solid #000;

  &:hover {
    background: rgba(100, 100, 255, 0.45);
    text-shadow: 2px 2px #202013cc;
  }
`;

const Buttons = { StyledMinecraftButton };

export default Buttons;
