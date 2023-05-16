import React from "react";
import Paragraph from "../paragraph/paragraph";

interface SectionTitleProps {
  title: string;
  desc: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className="mb-20 mt-36 flex flex-row items-center gap-10">
      <h2 className="p-2 font-bold text-40 bg-green rounded-lg leading-77">{props.title}</h2>
      <Paragraph width={"w-580"}>{props.desc}</Paragraph>
    </div>
  );
};
