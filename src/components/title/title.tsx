import React from "react";

interface SectionTitleProps {
  title: string;
  titleDesc: string;
  widthDesc: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className="mb-20 mt-36 flex flex-row items-center gap-10">
      <h2 className="p-2 font-bold text-40 bg-green rounded-lg leading-77">{props.title}</h2>
      <p className={`text-lg ${props.widthDesc}`}>{props.titleDesc}</p>
    </div>
  );
};
