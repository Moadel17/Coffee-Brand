import { useReducer, useState } from "react";
import "./count.css";

export default function Count({ count, setCount }) {
  // const [stock, setStock] = useState(10);

  return (
    <div className="count-component">
      <button
        disabled={count === 1}
        onClick={() => setCount((prev) => prev - 1)}>
        -
      </button>
      <p>{count}</p>
      <button
        // disabled={count === stock}
        onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
    </div>
  );
}
