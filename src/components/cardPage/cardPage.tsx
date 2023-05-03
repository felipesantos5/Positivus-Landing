import React from "react";
import { ServiceCard } from "../card/card";

import { ServiceCardImg } from "../ServiceCards/serviceCardImport";
import { SectionTitle } from "../title/title";

function CardPage () {
   return(
      <div className="ml-24 flex flex-col gap-10">
         <SectionTitle title={"Services"} titleDesc={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"} widthDesc={"w-580"}></SectionTitle>

         <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-10">
               <ServiceCard bgColor={"bg-grey"} title1={"Search engine"} title2={"optimization"} titleBg={"bg-green"} icon={ServiceCardImg.darkIcon} iconDescColor={"text-black"} imgService={ServiceCardImg.lupaService} widthImage={"w-72"} mrImage={"mr-12"} mtImage={"mt-4.5"}></ServiceCard>
               <ServiceCard bgColor={"bg-darkGrey"} title1={"Social Media"} title2={"Marketing"} titleBg={"bg-white"} icon={ServiceCardImg.whiteIcon} iconDescColor={"text-white"} imgService={ServiceCardImg.mediaService} widthImage={"w-64"} mrImage={"mr-11"} mtImage={"mt-11"}></ServiceCard>
               <ServiceCard bgColor={"bg-green"} title1={"Content"} title2={"Creation"} titleBg={"bg-white"} icon={ServiceCardImg.darkIcon} iconDescColor={"text-black"} imgService={ServiceCardImg.contentService} widthImage={"w-56"} mrImage={"mr-12  "} mtImage={"mt-14"}></ServiceCard>
            </div>
            <div className="flex flex-col gap-10">
               <ServiceCard bgColor={"bg-green"} title1={"Pay-per-click"} title2={"advertising"} titleBg={"bg-white"} icon={ServiceCardImg.darkIcon} iconDescColor={"text-black"} imgService={ServiceCardImg.payPerClickService} widthImage={"w-64"} mrImage={"mr-12"} mtImage={"mt-20"}></ServiceCard>
               <ServiceCard bgColor={"bg-white"} title1={"Email"} title2={"Marketing"} titleBg={"bg-green"} icon={ServiceCardImg.darkIcon} iconDescColor={"text-black"} imgService={ServiceCardImg.emailService} widthImage={"w-52"} mrImage={"mr-12"} mtImage={"mt-14"}></ServiceCard>
               <ServiceCard bgColor={"bg-darkGrey"} title1={"Analytics and "} title2={"Tracking"} titleBg={"bg-green"} icon={ServiceCardImg.whiteIcon} iconDescColor={"text-white"} imgService={ServiceCardImg.analyticsService} widthImage={"w-64"} mrImage={"mr-12"} mtImage={"mt-4.5"}></ServiceCard>
            </div>
         </div>
      </div>
   )
}

export default CardPage;