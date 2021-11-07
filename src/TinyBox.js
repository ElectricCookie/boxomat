import styled from "styled-components";

export const TinyBox = styled.div`
  height: ${(props) => props.sizeY * 2}rem;
  width: ${(props) => props.sizeX * 2}rem;
  background: ${(props) => props.color?.hex};
  border-radius: 4px;
`;
