import { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import Box from "./Box";
import BoxPlanner from "./BoxPlanner";

const NewBoxModal = () => {
  const { createBox, showAddBox, setShowAddBox } = BoxPlanner.useContainer();

  const [box, setBox] = useState({ sizeX: 5, sizeY: 3 });

  const sizes = [
    { sizeX: 5, sizeY: 3 },
    { sizeX: 6, sizeY: 5 },
    { sizeX: 7, sizeY: 5 },
    { sizeX: 8, sizeY: 6 },
    { sizeX: 11, sizeY: 7 },
  ];

  return (
    <Modal
      onClose={() => setShowAddBox(false)}
      onOpen={() => setShowAddBox(true)}
      open={showAddBox}
    >
      <Modal.Header>Select a box size</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Box box={{ ...box, inserts: [] }} scale={1}></Box>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {sizes.map((size) => {
              return (
                <Button
                  onClick={() => setBox(size)}
                  active={size.sizeX === box.sizeX && size.sizeY === box.sizeY}
                >
                  {size.sizeX}x{size.sizeY}
                </Button>
              );
            })}
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setShowAddBox(false)}>
          Cancel
        </Button>
        <Button color="primary" onClick={() => createBox(box)}>
          Create
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default NewBoxModal;
