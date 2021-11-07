import React from "react";
import BoxPlanner from "./BoxPlanner";
import Box from "./Box";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

const BoxListWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1rem;
  align-items: center;
  display: flex;
`;

const BoxList = () => {
  const { forBox, setActiveBoxId, setShowAddBox } = BoxPlanner.useContainer();

  return (
    <BoxListWrapper>
      {forBox((id, box) => (
        <Box
          boxId={id}
          onClick={() => {
            setActiveBoxId(id);
          }}
          preview
          box={box}
          scale={0.5}
        />
      ))}

      <Button onClick={() => setShowAddBox(true)}>Add box</Button>
    </BoxListWrapper>
  );
};

export default BoxList;
