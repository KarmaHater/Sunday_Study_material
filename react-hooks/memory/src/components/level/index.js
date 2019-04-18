import React from "react";
import "./styles.css";

const Levels = ({ levels }) => (
  <div class="container">
    <div class="level_buttons">
      <span>Levels</span>
      {Array.fill(levels).map((_, i) => (
        <i class="fa fa-heart fa-3x"> {i + 1}</i>
      ))}
    </div>
  </div>
);

export default Levels;
