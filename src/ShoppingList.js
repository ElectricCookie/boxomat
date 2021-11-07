import React, { useEffect, useState } from "react";
import { containerNrs } from "./products";
import BoxPlanner from "./BoxPlanner";
import styled from "styled-components";

const ShoppingListWrapper = styled.main`
  padding: 5rem 10vw;

  .pricing-table {
    border: 1px solid #ddd;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  table {
    overflow: hidden;
    thead {
      tr {
        border-bottom: 2px solid #ddd;
      }
    }
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid #ddd;
    }
    td {
      padding: 0.5rem;
    }
    width: 100%;
    th {
      text-align: left;
    }
  }
`;

const ShoppingList = () => {
  const { boxes } = BoxPlanner.useContainer();

  const [insertList, setInsertList] = useState({});
  const [boxList, setBoxList] = useState({});

  useEffect(() => {
    let inserts = {};
    let boxCounts = {};

    Object.keys(boxes).forEach((boxId) => {
      let box = boxes[boxId];
      const boxKey = box.sizeX + "x" + box.sizeY;
      if (boxCounts[boxKey] == null) {
        boxCounts[boxKey] = { count: 1, ...box };
      } else {
        boxCounts[boxKey].count++;
      }

      setBoxList(boxCounts);

      Object.keys(box.inserts)
        .map((insertId) => box.inserts[insertId])
        .sort((a, b) => Math.min(a.sizeY, a.sizeX) - Math.min(b.sizeY, b.sizeX))
        .sort((a, b) => Math.max(a.sizeY, a.sizeX) - Math.max(b.sizeY, b.sizeX))
        .forEach((insert) => {
          const insertName =
            Math.min(insert.sizeY, insert.sizeX) +
            "x" +
            Math.max(insert.sizeY, insert.sizeX) +
            ":" +
            insert.color.ral;

          if (inserts[insertName] == null) {
            inserts[insertName] = {
              count: 1,
              sizeA: Math.min(insert.sizeY, insert.sizeX),
              color: insert.color,
              sizeB: Math.max(insert.sizeY, insert.sizeX),
            };
          } else {
            inserts[insertName].count++;
          }
        });

      setInsertList(inserts);
    });
  }, [boxes]);

  return (
    <ShoppingListWrapper>
      <div className="pricing-table">
        <h2>Boxes</h2>
        <table>
          <thead>
            <tr>
              <th>Count</th>
              <th>Size</th>
              <th>Article NR</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(boxList).map((boxId) => {
              const box = boxList[boxId];

              return (
                <tr>
                  <td>{box.count}</td>
                  <td>{boxId}</td>
                  <td>{containerNrs[boxId]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pricing-table">
        <h2>Inserts</h2>
        <table>
          <thead>
            <tr>
              <th>Count</th>
              <th>Color</th>
              <th>Size</th>
              <th>Article NR</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(insertList).map((key) => {
              const insert = insertList[key];
              return (
                <tr>
                  <td>{insert.count}</td>
                  <td>{insert.color.ral.toUpperCase()}</td>
                  <td>
                    {insert.sizeA}x{insert.sizeB}
                  </td>

                  <td>
                    SB E {insert.sizeA}
                    {insert.sizeB}{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </ShoppingListWrapper>
  );
};

export default ShoppingList;
