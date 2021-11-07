import { Card } from "semantic-ui-react";
import BoxPlanner from "./BoxPlanner";
import InsertEditor from "./InsertEditor";

import { Collapse } from "react-collapse";

const InsertList = () => {
  const { activeBox, selectInsert } = BoxPlanner.useContainer();

  if (!activeBox) {
    return <div />;
  }

  return (
    <>
      {Object.keys(activeBox.inserts).map((insertKey) => {
        const insert = activeBox.inserts[insertKey];

        const active = activeBox.activeInsert === insertKey;

        return (
          <Card
            key={insertKey}
            fluid
            onClick={() => {
              selectInsert(insertKey);
            }}
          >
            <Card.Content>
              <Card.Header>
                {insert?.sizeX}x{insert?.sizeY} - {insert?.label}
                <br />
                <small>{insert?.color.ral}</small>
              </Card.Header>
            </Card.Content>
            <Collapse isOpened={active}>
              <div style={{ padding: "1rem" }}>
                <InsertEditor insertId={insertKey} />
              </div>
            </Collapse>
          </Card>
        );
      })}
    </>
  );
};

export default InsertList;
