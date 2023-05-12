import React from "react";
import { SectionTitle } from "../title/title";
import { ServiceCard } from "./card";
import lupaService from "../../public/img/serviceCardImg/lupa.svg";
import mediaService from "../../public/img/serviceCardImg/socialMedia.svg";
import contentService from "../../public/img/serviceCardImg/content.svg";
import payPerClickService from "../../public/img/serviceCardImg/payPerClick.svg";
import emailService from "../../public/img/serviceCardImg/emailMkt.svg";
import analyticsService from "../../public/img/serviceCardImg/analytics.svg";

function CardPage() {
  return (
        <div>
          <SectionTitle children={"Services"} desc={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"} widthDesc={"w-580"}></SectionTitle>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-10">
              <ServiceCard variant={"white"} children1={"Search engine"} children2={"optimization"} imgService={lupaService} widthImage={"w-72"}></ServiceCard>
              <ServiceCard variant={"dark"} children1={"Social Media"} children2={"Marketing"} imgService={mediaService} widthImage={"w-72"}></ServiceCard>
              <ServiceCard variant={"green"} children1={"Content"} children2={"Creation"} imgService={contentService} widthImage={"w-60"}></ServiceCard>
            </div>
            <div className="flex flex-col gap-10">
              <ServiceCard variant={"green"} children1={"Pay-per-click"} children2={"advertising"} imgService={payPerClickService} widthImage={"w-72"}></ServiceCard>
              <ServiceCard variant={"white"} children1={"Email"} children2={"Marketing"} imgService={emailService} widthImage={"w-60"}></ServiceCard>
              <ServiceCard variant={"dark"} children1={"Analytics and "} children2={"Tracking"} imgService={analyticsService} widthImage={"w-72"}></ServiceCard>
            </div>
          </div>
        </div>
  );
}

export default CardPage;
