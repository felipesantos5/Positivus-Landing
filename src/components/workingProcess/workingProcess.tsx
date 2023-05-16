import React from "react";
import { SectionTitle } from "../title/title";
import { CardsWorking } from "./cards";

// interface SectionTitleProps {
//   title: string;
//   desc: string;
//   widthDesc: string;
// }

// props: SectionTitleProps

export const WorkingProcess = () => {
  return (
    <div>
      <SectionTitle title={"Our Working Process"} desc={"Step-by-Step Guide to Achieving Your Business Goals"} widthDesc={"w-292"}></SectionTitle>
      <CardsWorking></CardsWorking>
    </div>
  );
};
