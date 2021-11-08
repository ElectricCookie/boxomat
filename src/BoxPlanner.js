import { createContainer } from "unstated-next";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import produce from "immer";
import { availableColors, availableSizes } from "./products";

const useBoxPlanner = () => {
  const initialState = JSON.parse(localStorage.getItem("app-state") ?? "{}");

  const [boxes, setBoxesState] = useState(initialState);

  const setBoxes = (boxes) => {
    localStorage.setItem("app-state", JSON.stringify(boxes));
    console.log("setBoxes", boxes);
    setBoxesState(boxes);
  };

  const [showAddBox, setShowAddBox] = useState(false);
  const [activeBoxId, setActiveBoxId] = useState(
    boxes != null ? Object.keys(boxes)[0] : null
  );
  const [repositioningInsert, setRepositioning] = useState(null);

  // Update the box with the given id.

  const updateInsert = (boxId, insertId, insert) => {
    setBoxes(
      produce(boxes, (draft) => {
        const box = draft[boxId];
        if (insert != null) {
          box.inserts[insertId] = insert;
        } else {
          delete box.inserts[insertId];
        }
      })
    );
  };

  const updateBox = (id, box) => {
    setBoxes(
      produce(boxes, (draft) => {
        if (box != null) {
          draft[id] = box;
        } else {
          // Delete if null

          delete draft[id];
        }
      })
    );
  };
  // Create a new box
  const createBox = (product) => {
    const newBoxId = uuid();
    setBoxes(
      produce(boxes, (draft) => {
        draft[newBoxId] = {
          ...product,
          inserts: {},
        };
        return draft;
      })
    );
    // Hide the modal
    setShowAddBox(false);
    // Select the box
    setActiveBoxId(newBoxId);
  };

  const getSlots = (box) => {
    let slots = [];

    const { selectionStart, inserts, sizeY, sizeX } = box;

    for (let x = 0; x < sizeX; x++) {
      for (let y = 0; y < sizeY; y++) {
        let slot = {
          selectable: true,
          x,
          y,
          selected: selectionStart?.x === x && selectionStart?.y === y,
        };
        // If the user already started a selection determine selection
        if (selectionStart != null) {
          let totalSizeX = Math.abs(selectionStart.x - x) + 1;
          let totalSizeY = Math.abs(selectionStart.y - y) + 1;

          const biggerSide = Math.max(totalSizeX, totalSizeY);
          const smallerSide = Math.min(totalSizeX, totalSizeY);
          let sizeExists = false;
          for (var size of availableSizes) {
            if (size[0] === biggerSide && size[1] === smallerSide) {
              sizeExists = true;
            }
          }
          slot.selectable = sizeExists;

          // Insert that would be generated if the user selected this insert now.
          let prototype = {
            x: Math.min(selectionStart.x, x),
            y: Math.min(selectionStart.y, y),
            sizeX: totalSizeX,
            sizeY: totalSizeY,
          };

          slot.prototype = prototype;

          // Now determine if the prototype would collide with existing inserts

          for (let insertId of Object.keys(inserts)) {
            let insert = inserts[insertId];
            if (
              insert.x < prototype.x + prototype.sizeX &&
              insert.x + insert.sizeX > prototype.x &&
              insert.y < prototype.y + prototype.sizeY &&
              insert.y + insert.sizeY > prototype.y
            ) {
              slot.selectable = false;
              break;
            }
          }
        } else {
          // No selection was started. So just sort out slots that are already occupied by inserts
          for (let insertId of Object.keys(inserts)) {
            let insert = inserts[insertId];
            if (
              x >= insert.x &&
              x < insert.x + insert.sizeX &&
              y >= insert.y &&
              y < insert.y + insert.sizeY
            ) {
              slot.selectable = false;
              break;
            }
          }
        }
        slots.push(slot);
      }
    }
    return slots;
  };

  const selectSlot = (slot) => {
    let box = boxes[activeBoxId];
    if (box.selectionStart != null) {
      setBoxes(
        produce(boxes, (draft) => {
          const id = uuid();

          if (repositioningInsert != null) {
            // Check size

            if (
              repositioningInsert.sizeX * repositioningInsert.sizeY !==
              slot.prototype.sizeX * slot.prototype.sizeY
            ) {
              if (
                !window.confirm("Your new box has a different size. Continue?")
              ) {
                return;
              }
            }
          }

          draft[activeBoxId].inserts[id] = {
            label: "",
            color: availableColors[0],
            ...repositioningInsert,
            ...slot.prototype,
          };
          draft[activeBoxId].selectionStart = null;

          setRepositioning(null);

          return draft;
        })
      );
    } else {
      setBoxes(
        produce(boxes, (draft) => {
          draft[activeBoxId].selectionStart = slot;

          return draft;
        })
      );
    }
  };

  const repositionInsert = (insertId) => {
    let box = boxes[activeBoxId];
    let insert = box.inserts[insertId];

    setRepositioning({ ...insert, boxId: activeBoxId, insertId });

    setBoxes(
      produce(boxes, (draft) => {
        delete draft[activeBoxId].inserts[insertId];

        return draft;
      })
    );
  };

  const cancelReposition = () => {
    if (repositioningInsert != null) {
      const { boxId, insertId } = repositioningInsert;
      setBoxes(
        produce(boxes, (draft) => {
          draft[boxId].inserts[insertId] = repositioningInsert;

          return draft;
        })
      );
      setRepositioning(null);
    }
  };

  const clearInserts = () => {
    if (window.confirm("Are you sure?")) {
      setBoxes(
        produce(boxes, (draft) => {
          draft[activeBoxId].inserts = {};

          return draft;
        })
      );
    }
  };

  const selectInsert = (id) => {
    if (boxes[activeBoxId].activeInsert === id) {
      return;
    }

    setBoxes(
      produce(boxes, (draft) => {
        draft[activeBoxId].activeInsert = id;

        return draft;
      })
    );
  };

  return {
    showAddBox,
    forBox: (render) => Object.keys(boxes).map((id) => render(id, boxes[id])),
    setShowAddBox,
    clearInserts,
    selectSlot,
    updateInsert,
    repositionInsert,
    repositioningInsert,
    cancelReposition,
    selectInsert,
    activeBox: boxes[activeBoxId],
    activeBoxId,
    getSlots,
    createBox,
    updateBox,
    setActiveBoxId,
    boxes,
  };
};

let BoxPlanner = createContainer(useBoxPlanner);

export default BoxPlanner;
