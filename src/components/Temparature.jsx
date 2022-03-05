import React from "react";
import "./css/input.css";

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit",
};
export default function Temperature({
  scale,
  temperature,
  onTemperatureChange,
}) {
  return (
    <div className="container">
      <fieldset className="input">
        <legend>Enter your {scaleName[scale]}</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </div>
  );
}
