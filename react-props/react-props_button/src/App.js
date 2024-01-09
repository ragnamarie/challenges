import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="black" color2="red" disabled={true} text="DONT PRESS" />
      <Button color="white" color2="green" disabled={false} text="PRESS" />
    </div>
  );
}

export function Button({ disabled, text, color, color2 }) {
  return (
    <button
      style={{
        width: "100px",
        height: "100px",
        color: color,
        backgroundColor: color2,
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
