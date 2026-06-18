import { useState } from "react";

const lightOrder = ["red", "green", "yellow"];

export default function TrafficLightSimulator() {
  const [light, setLight] = useState("red");

  const nextLight = () => {
    const nextIndex = (lightOrder.indexOf(light) + 1) % lightOrder.length;
    setLight(lightOrder[nextIndex]);
  };

  return (
    <div className="traffic-light">
      <h2>Traffic Light Simulator</h2>

      <div className="traffic-light__body" aria-label={`Current light: ${light}`}>
        <div
          className={
            light === "red"
              ? "traffic-light__bulb traffic-light__bulb--red is-active"
              : "traffic-light__bulb traffic-light__bulb--red"
          }
        />
        <div
          className={
            light === "yellow"
              ? "traffic-light__bulb traffic-light__bulb--yellow is-active"
              : "traffic-light__bulb traffic-light__bulb--yellow"
          }
        />
        <div
          className={
            light === "green"
              ? "traffic-light__bulb traffic-light__bulb--green is-active"
              : "traffic-light__bulb traffic-light__bulb--green"
          }
        />
      </div>

      <p className="lede">Current light: {light.toUpperCase()}</p>

      <button type="button" onClick={nextLight} className="button button--primary">
        Change Light
      </button>
    </div>
  );
}
