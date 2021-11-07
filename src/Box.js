import React from "react";
import BoxPlanner from "./BoxPlanner";
import { BoxSlot } from "./BoxSlot";
import { BoxWrapper } from "./BoxWrapper";
import { Insert } from "./Insert";

const Box = ({ box, scale, preview, onClick }) => {
  const { sizeX, sizeY, inserts } = box;

  const { getSlots, selectSlot, selectInsert } = BoxPlanner.useContainer();

  return (
    <>
      <BoxWrapper scale={scale} sizeX={sizeX} sizeY={sizeY}>
        <div onClick={preview ? onClick : null} className="content">
          <div className="inserts">
            {getSlots(box).map((slot) => {
              return (
                <BoxSlot
                  x={slot.x}
                  selected={slot.selected}
                  scale={scale}
                  onClick={() => {
                    if (!preview) selectSlot(slot);
                  }}
                  selectable={slot.selectable}
                  y={slot.y}
                ></BoxSlot>
              );
            })}
          </div>
          <div className="inserts">
            {Object.keys(inserts).map((insertId) => {
              let insert = inserts[insertId];
              let label;
              if (!preview) {
                label = `${insert.sizeX}x${insert.sizeY}`;
                if (insert.label) {
                  label = insert.label;
                }
              }

              return (
                <Insert
                  editing={insertId === box.activeInsert}
                  scale={scale}
                  onClick={() => {
                    if (preview) return;
                    if (insertId === box.activeInsert) {
                      selectInsert(null);
                      return;
                    }
                    selectInsert(insertId);
                  }}
                  {...insert}
                >
                  {label}
                </Insert>
              );
            })}
          </div>
        </div>
      </BoxWrapper>
    </>
  );
};

export default Box;
