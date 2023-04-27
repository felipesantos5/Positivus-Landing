import React from "react";
interface ServiceCardProps {
   bgColor: string; 
   title1: string;
   title2: string;
   titleBg: string;
   icon: string;
   iconDescColor: string;
   imgService: string;
}

export const ServiceCard = (props: ServiceCardProps) => {
   return (
      <div className={`mt-4 ml-4 w-37.5 h-19.375 border border-darkGrey drop-shadow-cardShadow rounded-cardRadius ${props.bgColor}`}>
         <div className="flex flex-row grid-cols-2">
            <div className="mt-12 ml-12 flex flex-col gap-24">
               <div className="">
                  <h1 className={` inline-block p-1 text-3xl rounded-lg ${props.titleBg}`}>{props.title1}</h1>
                  <h1 className={` inline-block p-1 text-3xl rounded-lg ${props.titleBg}`}>{props.title2}</h1>
               </div>
               <div className="flex flex-row items-center gap-3.5">
                  <img src={props.icon} alt="Service card icon"/>
                  <p className={props.iconDescColor}>Learn more</p>
               </div>
            </div>
            <div className="mr-12 mt-10">
               <img src={props.imgService} alt="Service card image" className="w-72 h-56" />
            </div>
         </div>
      </div>
   );
}

