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

  const {
    activeBox,
    boxes,
    updateBox,
    setShowAddBox,
    activeBoxId,
    deleteBox,
    clearInserts,
  } = BoxPlanner.useContainer();

  if (Object.keys(boxes).length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <NewBoxModal />
        <p>You don't have a box yet.</p>
        <Button primary onClick={() => setShowAddBox(true)}>
          Create your first box
        </Button>
      </div>
    );
  }

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
            Box: {activeBox?.sizeX}x{activeBox?.sizeY} (
            {activeBox?.sizeX * activeBox?.sizeY} slots)
          </h2>

          <h3>Inserts</h3>
          <InsertList />

          <Button color="red" onClick={clearInserts}>
            Clear inserts
          </Button>
          <Button color="red" onClick={deleteBox}>
            Delete box
          </Button>
        </div>
      </EditorWrapper>
    </>
  );
};

export default Editor;
