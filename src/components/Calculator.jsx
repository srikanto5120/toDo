import React from "react";
import Temperature from "./Temparature";
import { convert, toCelsius, toFahrenheit } from "../lib/Convater";
import BoilVerdict from "./BoilVerdict";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };
  onTemperatureChange = (e, scale) => {
    this.setState({
      scale,
      temperature: e.target.value,
    });
  };
  render() {
    const { temperature, scale } = this.state;

    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <Temperature
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.onTemperatureChange}
        />
        <Temperature
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.onTemperatureChange}
        />
        {celsius && <BoilVerdict celsius={parseFloat(celsius)} />}
      </div>
    );
  }
}
