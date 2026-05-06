import { useState } from "react";
import { price } from "./dropData";
import "./dropDown.css";

export default function DropdownPrice({ setSort }) {
  const [open, setOpen] = useState(false);
  const [choose, setChoose] = useState("Default");

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setOpen((prev) => !prev)}>
        {choose}
      </div>

      {open && (
        <div className="dropdown-options">
          {price.map((e) => (
            <div
              key={e.id}
              className="dropdown-option"
              onClick={() => {
                setSort(e.type);
                setChoose(e.name);
                setOpen(false);
              }}>
              {e.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
