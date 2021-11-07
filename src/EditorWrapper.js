import styled from "styled-components";

export const EditorWrapper = styled.main`
  flex: 1;
  display: flex;

  .editor {
    display: flex;
    position: relative;
    overflow: hidden;
    align-items: center;
    flex: 1;

    justify-content: center;
    background: #fafafa;
  }
  .inspector {
    min-width: 30%;

    overflow-y: auto;
    padding: 1rem;
    border-left: 1px solid #ddd;
  }
`;
