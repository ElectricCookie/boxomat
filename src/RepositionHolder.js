import React from "react";
import { Button } from "semantic-ui-react";
import BoxPlanner from "./BoxPlanner";
import { RepositionWrapper } from "./RepositionWrapper";
import { TinyBox } from "./TinyBox";

export const RepositionHolder = () => {
  const { repositioningInsert, cancelReposition } = BoxPlanner.useContainer();

  let label = repositioningInsert?.label ?? "";

  console.log(repositioningInsert);

  return (
    <RepositionWrapper active={repositioningInsert != null}>
      <div style={{ flex: 1 }}>
        <b>Moving</b>

        <br />
        <span>{label.length === 0 ? "No label" : label}</span>
        <br />
        <span>
          Original size: {repositioningInsert?.sizeX}x
          {repositioningInsert?.sizeY}
        </span>
        <br />
        <br />
        <Button onClick={() => cancelReposition()}>Cancel</Button>
      </div>

      <TinyBox {...repositioningInsert} />
    </RepositionWrapper>
  );
};
