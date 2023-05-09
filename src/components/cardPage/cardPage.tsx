import React from "react";
import { ServiceCard } from "../card/card";
import { SectionTitle } from "../title/title";

import lupaService from "../../public/img/serviceCardImg/lupa.svg";
import mediaService from "../../public/img/serviceCardImg/socialMedia.svg";
import contentService from "../../public/img/serviceCardImg/content.svg";
import payPerClickService from "../../public/img/serviceCardImg/payPerClick.svg";
import emailService from "../../public/img/serviceCardImg/emailMkt.svg";
import analyticsService from "../../public/img/serviceCardImg/analytics.svg";
import darkIcon from "../../public/img/serviceCardImg/darkIcon.svg";
import whiteIcon from "../../public/img/serviceCardImg/whiteIcon.svg";

function CardPage() {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle
        title={"Services"}
        titleDesc={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"}
        widthDesc={"w-580"}
      ></SectionTitle>

      <div className="grid grid-cols-2 gap-11">
        <div className="flex flex-col gap-10">
          <ServiceCard
            bgColor={"bg-grey"}
            title1={"Search engine"}
            title2={"optimization"}
            titleBg={"bg-green"}
            icon={darkIcon}
            iconDescColor={"text-black"}
            imgService={lupaService}
            widthImage={"w-72"}
            mrImage={"mr-12"}
            mtImage={"mt-20"}
          ></ServiceCard>

          <ServiceCard
            bgColor={"bg-darkGrey"}
            title1={"Social Media"}
            title2={"Marketing"}
            titleBg={"bg-white"}
            icon={whiteIcon}
            iconDescColor={"text-white"}
            imgService={mediaService}
            widthImage={"w-64"}
            mrImage={"mr-11"}
            mtImage={"mt-11"}
          ></ServiceCard>

          <ServiceCard
            bgColor={"bg-green"}
            title1={"Content"}
            title2={"Creation"}
            titleBg={"bg-white"}
            icon={darkIcon}
            iconDescColor={"text-black"}
            imgService={contentService}
            widthImage={"w-56"}
            mrImage={"mr-12  "}
            mtImage={"mt-14"}
          ></ServiceCard>
        </div>
        <div className="flex flex-col gap-10">
          <ServiceCard
            bgColor={"bg-green"}
            title1={"Pay-per-click"}
            title2={"advertising"}
            titleBg={"bg-white"}
            icon={darkIcon}
            iconDescColor={"text-black"}
            imgService={payPerClickService}
            widthImage={"w-64"}
            mrImage={"mr-12"}
            mtImage={"mt-20"}
          ></ServiceCard>

          <ServiceCard
            bgColor={"bg-white"}
            title1={"Email"}
            title2={"Marketing"}
            titleBg={"bg-green"}
            icon={darkIcon}
            iconDescColor={"text-black"}
            imgService={emailService}
            widthImage={"w-56"}
            mrImage={"mr-12"}
            mtImage={"mt-12"}
          ></ServiceCard>

          <ServiceCard
            bgColor={"bg-darkGrey"}
            title1={"Analytics and "}
            title2={"Tracking"}
            titleBg={"bg-green"}
            icon={whiteIcon}
            iconDescColor={"text-white"}
            imgService={analyticsService}
            widthImage={"w-64"}
            mrImage={"mr-12"}
            mtImage={"mt-20"}
          ></ServiceCard>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
