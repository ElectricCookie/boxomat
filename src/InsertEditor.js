import produce from "immer";
import React from "react";
import { Button, Form, FormField, Input } from "semantic-ui-react";
import styled from "styled-components";
import BoxPlanner from "./BoxPlanner";
import { availableColors } from "./products";

// Color selection box
export const Swatch = styled.div`
  display: inline-block;
  width: 32px;
  border-radius: 4px;
  height: 32px;
  border: 1px solid ${(props) => (props.active ? "#000" : "#ddd")};
  margin: 5px;
  transition: opacity 0.2s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  cursor: pointer;
  background: ${(props) => props.color.hex};
  &:hover {
    opacity: 1;
  }
`;

// Available colors

// Insert editor allows the user to modify the properties of a box insert.

const InsertEditor = ({ insertId }) => {
  const {
    activeBox,
    updateInsert,
    activeBoxId,
    selectInsert,
    repositionInsert,
  } = BoxPlanner.useContainer();

  const insert = activeBox.inserts[insertId];

  const setInsert = (newInsert) =>
    updateInsert(activeBoxId, insertId, newInsert);

  const changeLabel = (e) => {
    if (e.target.value.length > 24) {
      return;
    }
    setInsert(
      produce(insert, (draft) => {
        draft.label = e.target.value;
        return draft;
      })
    );
  };

  const changeColor = (color) => {
    setInsert(
      produce(insert, (draft) => {
        draft.color = color;
        return draft;
      })
    );
  };

  // Updating with value of null deletes the insert
  const deleteInsert = () => {
    setInsert(null);
  };

  const submitted = (e) => {
    e.preventDefault();
  };

  const reposition = () => {
    repositionInsert(insertId);
  };

  return (
    <Form onSubmit={submitted}>
      <FormField>
        <label>Label</label>
      </FormField>
      <Input type="text" onChange={changeLabel} value={insert.label} />
      <FormField>
        <label>Color</label>

        {availableColors.map((color) => {
          return (
            <Swatch
              active={color === insert.color}
              onClick={() => {
                changeColor(color);
              }}
              color={color}
            />
          );
        })}
      </FormField>
      <FormField>
        <Button onClick={deleteInsert}>Remove</Button>
        <Button onClick={reposition}>Move</Button>
      </FormField>
    </Form>
  );
};

export default InsertEditor;
