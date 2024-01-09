import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter({ onPlus, onMinus }) {
  const [count, setCount] = useState(0);

  function handleClickPlus() {
    setCount(count + 1);
  }

  function handleClickMinus() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          onClick={handleClickPlus}
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          type="button"
          onClick={handleClickMinus}
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
