import React, { useState } from "react";
import "./inputradio.css";

interface inputRadio {
  id: string;
  label: string;
}

export const InputRadio = (props: inputRadio) => {
  const [selected, setSelected] = useState(true);

  const handleToggle = () => {
    console.log("teste");
    setSelected(!selected);
  };

  const circleClassName = `inline-block w-7 h-7 rounded-full border ${selected ? "bg-white" : "bg-green"}`;

  return (
    <div className="flex content-center gap-4">
      <label>
        <input type="radio" className="w-7 h-7 hidden" />
        <span className={circleClassName} onClick={handleToggle}></span>
      </label>
      <span className="">{props.label}</span>
    </div>
  );
};
