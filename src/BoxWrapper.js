import styled from "styled-components";

export const BoxWrapper = styled.div`
  background: #fff;
  border-radius: ${(props) => Math.max(1.5 * props.scale, 4)}px;
  display: flex;
  margin: ${(props) => 10 * props.scale}px;
  flex-direction: column;
  padding: 1rem;
  border: ${(props) => (props.active ? "1px solid #000" : "1px solid #ddd")};

  .content {
    position: relative;
    width: calc(${(props) => props.sizeX * props.scale}vw);
    height: ${(props) => props.sizeY * props.scale}vw;
    > div {
      position: absolute;
      display: grid;
      grid-gap: 5px;
      grid-template-columns: ${(props) =>
        "minmax(0, 1fr) ".repeat(props.sizeX)};
      grid-template-rows: ${(props) => "minmax(0, 1fr) ".repeat(props.sizeY)};
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .inserts {
      pointer-events: none;
      > div {
        pointer-events: all;
      }
    }
  }

  small {
    text-align: center;
    color: #ddd;
    display: block;
  }
  .inserts {
    display: grid;
  }
`;
