import React from "react";
interface ServiceCardProps {
  bgColor: string;
  title1: string;
  title2: string;
  titleBg: string;
  icon: string;
  iconDescColor: string;
  imgService: string;
  widthImage: string;
  mrImage: string;
  mtImage: string;
}

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className={`border border-darkGrey drop-shadow-cardShadow rounded-cardRadius ${props.bgColor}`}>
      <div className="flex grid-cols-2">
        <div className="mt-12 ml-12 mb-12 flex flex-col gap-20">
          <div className="">
            <h1 className={`font-medium text-30 inline-block p-1 rounded-lg ${props.titleBg}`}>{props.title1}</h1>
            <h1 className={`font-medium text-30 inline-block p-1 rounded-lg ${props.titleBg}`}>{props.title2}</h1>
          </div>
          <div className="flex flex-row items-center gap-3.5">
            <img src={props.icon} alt="Service card icon" />
            <p className={props.iconDescColor}>Learn more</p>
          </div>
        </div>
        <div className={`${props.mrImage} ${props.mtImage}`}>
          <img src={props.imgService} alt="Service card image" className={`${props.widthImage}`} />
        </div>
      </div>
    </div>
  );
};
