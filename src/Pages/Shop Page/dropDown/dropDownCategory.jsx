import { useState } from "react";
import { data } from "./dropData";
import "./dropDown.css";

export default function DropdownCategory({ select, setSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setOpen((prev) => !prev)}>
        {select}
      </div>

      {open && (
        <div className="dropdown-options">
          {data.map((e) => (
            <div
              key={e.id}
              className="dropdown-option"
              onClick={() => {
                setSelect(e.category);
                setOpen(false); // يغلق القائمة بعد الاختيار
              }}>
              {e.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
