import styled from "styled-components";

export const Insert = styled.div`
  grid-row-start: ${(props) => props.y + 1};
  grid-row-end: ${(props) => props.y + 1 + props.sizeY};
  grid-column-start: ${(props) => props.x + 1};
  grid-column-end: ${(props) => props.x + 1 + props.sizeX};
  background: ${(props) => props.color.hex};
  opacity: 1;
  border: 2px solid ${(props) => (props.editing ? "#000" : "#ddd")};
  display: flex;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  align-items: center;
  text-align: center;
  color: #fff;
  justify-content: center;
  /*box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);*/
  border-radius: ${(props) => 1.5 * props.scale}px;
`;
