import React from "react";
import { Container } from "semantic-ui-react";

import licenses from "./licenses.json";

const About = () => {
  return (
    <Container>
      <h1>Boxomat</h1>
      <a href="">Github</a>
      <p>Boxomat helps you plan assortments. </p>
      <br />
      <h2>Licensing</h2>
      <p>Boxomat is licensed under the MIT license. </p>

      <h2>Credits</h2>
      <ul>
        {Object.keys(licenses).map((packageName, index) => {
          return (
            <li key={index}>
              <a
                target="_bank"
                rel="noreferrer"
                href={licenses[packageName].repository}
              >
                {packageName}
              </a>{" "}
              &middot; License:{" "}
              <a href={licenses[packageName].licenseUrl}>
                {licenses[packageName].licenses}
              </a>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default About;
