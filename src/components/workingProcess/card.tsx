import React from "react";
import Paragraph from "../paragraph/paragraph";
import plus from "../../public/img/workingProcess/plus.svg";
import line from "../../public/img/workingProcess/Line.svg";

interface cardWorking {
  selected?: boolean;
  number: string;
  title: string;
  text?: string;
}

export const CardWorking = (props: cardWorking) => {
  return (
    <div className="border border-darkGrey drop-shadow-cardShadow rounded-cardRadius bg-white mb-8 px-16 py-10 flex flex-col">
      <div className="flex justify-between mb-7">
        <div className="flex gap-9 items-center">
          <h2 className="text-60 font-medium">{props.number}</h2>
          <h2 className="text-30 font-medium h-38">{props.title}</h2>
        </div>
        {
          <button className="">
            <img src={plus} alt="button" />
          </button>
        }
      </div>
      <div className="">
        <img src={line} alt="line" />
        <Paragraph width={""} children={"lorem yeqrwfrqewrqwrfew"}></Paragraph>
      </div>
    </div>
  );
};
