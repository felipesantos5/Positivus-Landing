import React from "react";
import { SectionTitle } from "../default/title/title";
import { CardsWorking } from "./cards";

export const WorkingProcess = () => {
  return (
    <div>
      <SectionTitle title={"Our Working Process"} desc={"Step-by-Step Guide to Achieving Your Business Goals"} widthDesc={"w-292"}></SectionTitle>
      <CardsWorking></CardsWorking>
    </div>
  );
};
