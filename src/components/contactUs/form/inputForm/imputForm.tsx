import React from "react";

interface inputContactUs {
  id: string;
  type: string;
  label: string;
  placeHolder: string;
  height?: string;
}

export const InputForm = (props: inputContactUs) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">
        <span className="ml-2">{props.label}</span>
        <input className={`border border-gray-300 rounded-2xl px-7 py-4 w-full ${props.height}`} type={props.type} id={props.id} placeholder={props.placeHolder} />
      </label>
    </div>
  );
};
