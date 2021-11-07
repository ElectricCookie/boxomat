import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import Box from "./Box";
import BoxList from "./BoxList";
import BoxPlanner from "./BoxPlanner";
import { EditorWrapper } from "./EditorWrapper";
import InsertList from "./InsertList";
import NewBoxModal from "./NewBoxModal";
import { RepositionHolder } from "./RepositionHolder";

const Editor = () => {
  const [scale, setScale] = useState(3);

  const { activeBox, updateBox, activeBoxId, clearInserts } =
    BoxPlanner.useContainer();

  return (
    <>
      <BoxList></BoxList>
      <EditorWrapper>
        <NewBoxModal />

        <div className="editor">
          {activeBox != null ? (
            <Box
              updateBox={(box) => updateBox(activeBox, box)}
              active
              scale={scale}
              boxId={activeBoxId}
              box={activeBox}
            ></Box>
          ) : null}

          <RepositionHolder />
        </div>
        <div className="inspector">
          <h2>
            {activeBox?.sizeX}x{activeBox?.sizeY}
          </h2>
          <Button onClick={clearInserts}>Clear inserts</Button>

          <h3>Inserts</h3>
          <InsertList />
        </div>
      </EditorWrapper>
    </>
  );
};

export default Editor;
