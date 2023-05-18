import React from "react";
import Paragraph from "../paragraph/paragraph";

interface SectionTitleProps {
  title: string;
  desc: string;
  widthDesc?: string | React.ReactNode;
}

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className="mb-20 mt-36 flex flex-row items-center gap-10">
      <h2 className="p-1 font-bold text-40 bg-green rounded-lg leading-77">{props.title}</h2>
      <Paragraph width={props.widthDesc}>{props.desc}</Paragraph>
    </div>
  );
};
