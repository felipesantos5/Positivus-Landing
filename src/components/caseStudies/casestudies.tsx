import React from "react";
import { SectionTitle } from "../default/title/title";
import { Carousel } from "./carousel/carousel";

// interface studiesProps {
//
// }

// props: studiesProps

export const CasesStudies = () => {
  return (
    <div>
      <SectionTitle title={"Case Studies"} desc={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"} widthDesc={"w-580"}></SectionTitle>

      <Carousel></Carousel>
    </div>
  );
};
