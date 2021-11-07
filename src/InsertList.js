import { Card } from "semantic-ui-react";
import BoxPlanner from "./BoxPlanner";
import InsertEditor from "./InsertEditor";

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
            fluid
            onClick={
              active
                ? null
                : () => {
                    selectInsert(insertKey);
                  }
            }
          >
            <Card.Content>
              <Card.Header>
                {insert?.sizeX}x{insert?.sizeY} - {insert?.label}
                <br />
                <small>{insert?.color.ral}</small>
              </Card.Header>
            </Card.Content>
            {active ? (
              <Card.Content>
                <InsertEditor insertId={insertKey} />
              </Card.Content>
            ) : null}
          </Card>
        );
      })}
    </>
  );
};

export default InsertList;
