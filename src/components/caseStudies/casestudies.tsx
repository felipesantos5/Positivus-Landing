import React from "react";
import { SectionTitle } from "../title/title";
import { Carousel } from "./carousel";

// interface studiesProps {
//
// }

// props: studiesProps

export const CasesStudies = () => {
  return (
    <div>
      <SectionTitle title={"Case Studies"} desc={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"} widthDesc={"580"}></SectionTitle>

      <Carousel></Carousel>
    </div>
  );
};
