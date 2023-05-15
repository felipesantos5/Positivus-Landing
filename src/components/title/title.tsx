import React from "react";
import Paragraph from "../paragraph/paragraph";

interface SectionTitleProps {
  children: string;
  desc: string;
  widthDesc: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className="mb-20 mt-36 flex flex-row items-center gap-10">
      <h2 className="p-2 font-bold text-40 bg-green rounded-lg leading-77">{props.desc}</h2>
      <Paragraph width={"w-580"}>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</Paragraph>
      <h2 className="p-2 font-bold text-40 bg-green rounded-lg leading-77">{props.children}</h2>
      <p className={`text-lg ${props.widthDesc}`}>{props.desc}</p>
    </div>
  );
};
