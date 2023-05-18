import React from "react";
import Paragraph from "../paragraph/paragraph";
import arrow from "../../public/img/carousel/arrowTopIcon.png";
import { Line } from "./line";

export const Carousel = () => {
  return (
    <div className="flex justify-center items-center bg-darkGrey h-326 rounded-3xl">
      <div className="flex flex-col gap-5">
        <Paragraph width={"w-286"} textColor="text-white">
          For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
        </Paragraph>
        <div className="flex gap-4">
          <p className="text-green text-20">Learn more</p>
          <img className="w-6 h-5 self-center" src={arrow} alt="arrow" />
        </div>
      </div>

      <Line></Line>

      <div className="flex flex-col gap-5">
        <Paragraph width={"w-286"} textColor="text-white">
          For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
        </Paragraph>
        <div className="flex gap-4">
          <p className="text-green text-20">Learn more</p>
          <img className="w-6 h-5 self-center" src={arrow} alt="arrow" />
        </div>
      </div>

      <Line></Line>

      <div className="flex flex-col gap-5">
        <Paragraph width={"w-286"} textColor="text-white">
          For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
        </Paragraph>
        <div className="flex gap-4">
          <p className="text-green text-20">Learn more</p>
          <img className="w-6 h-5 self-center" src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
