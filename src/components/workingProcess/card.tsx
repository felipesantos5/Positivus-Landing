import React from "react";
import Paragraph from "../paragraph/paragraph";

interface cardWorking {
  selected: boolean;
  number: string;
  title: string;
  text?: string;
}

export const CardWorking = (props: cardWorking) => {
  return (
    <div className="">
      <div>
        <div>
          <h2>{props.number}</h2>
          <h2>{props.title}</h2>
        </div>
        <button className=""></button>
      </div>
      <Paragraph width={""} children={""}></Paragraph>
    </div>
  );
};
