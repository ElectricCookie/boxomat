import styled from "styled-components";

export const BoxSlot = styled.div`
  background: ${(props) => {
    if (props.selected) {
      return "#aaa";
    }
    if (props.selectable) {
      return "#dadada";
    }
    return "#fafafa";
  }};
  border-radius: ${(props) => 1.5 * props.scale}px;
  transition: all 0.2s ease-in-out;

  grid-column: ${(props) => props.x + 1};
  grid-row: ${(props) => props.y + 1};
`;
