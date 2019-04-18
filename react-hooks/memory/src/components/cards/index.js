import React from "react";
import Card from "./Card";
import "./styles.css";

export const Cards = ({ letters }) => (
  <div id="card-template" type="text/x-handlebars-template">
    {letters.map((l, i) => (
      <Card key={i} />
    ))}
  </div>
);
