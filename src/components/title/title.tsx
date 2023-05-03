import React from "react";

interface SectionTitleProps {
   title: string;
   titleDesc: string;
   widthDesc: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
   return (
      <div className="mb-20 flex flex-row items-center gap-10 mt-36">
         <h1 className="p-2 font-medium text-40 bg-green rounded-lg">{props.title}</h1>
         <p className={`text-lg ${props.widthDesc}`}>{props.titleDesc}</p>
      </div>
   )
}