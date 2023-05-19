import React from "react";
import linkedinIcon from "../../public/img/team/linkedinIcon.svg";
import line from "../../public/img/team/line.svg";

interface TeamCardProps {
  imgTeam: string;
  name: string;
  nameDesc: string;
  cardDesc: string;
  widthDesc: string;
}

export const TeamCards = (props: TeamCardProps) => {
  return (
    <div className="bg-white border border-darkGrey rounded-cardRadius drop-shadow-cardShadow">
      <div className="flex flex-col gap-7 px-9 py-10">
        <div className="flex flex-row justify-between">
          <div className="flex gap-3">
            <img src={props.imgTeam} alt="Perfil Image" />
            <div className="flex flex-col justify-end">
              <h1 className="text-xl font-medium">{props.name}</h1>
              <p className={`text-lg font-normal ${props.widthDesc}`}>{props.nameDesc}</p>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </div>
        </div>
        <div className="flex justify-center">
          <img src={line} alt="line" />
        </div>
        <div className="flex justify-center">
          <p className="w-317">{props.cardDesc}</p>
        </div>
      </div>
    </div>
  );
};
