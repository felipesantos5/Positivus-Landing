import React from "react";
import { SectionTitle } from "../default/title/title";
import { TeamCards } from "./card";
import Button from "../default/button/button";
import emily from "../../public/img/team/emily.svg";
import jane from "../../public/img/team/jane.svg";
import john from "../../public/img/team/john.svg";
import michael from "../../public/img/team/michael.svg";
import sarah from "../../public/img/team/sarah.svg";
import brian from "../../public/img/team/brian.svg";

export const TeamPage = () => {
  return (
    <div>
      <SectionTitle title={"Team"} desc={"Meet the skilled and experienced team behind our successful digital marketing strategies"} widthDesc={"w-473"}></SectionTitle>

      <div className="flex flex-col gap-10 mb-10">
        <div className="grid grid-cols-3 gap-10">
          <TeamCards
            imgTeam={john}
            name={"John Smith"}
            nameDesc={"CEO and Founder"}
            cardDesc={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"}
            widthDesc={"w-148"}
          ></TeamCards>

          <TeamCards
            imgTeam={jane}
            name={"Jane Doe"}
            nameDesc={"Director of Operations"}
            cardDesc={"7+ years of experience in project management and team leadership. Strong organizational and communication skills"}
            widthDesc={"w-194"}
          ></TeamCards>

          <TeamCards
            imgTeam={michael}
            name={"Michael Brown"}
            nameDesc={"Senior SEO Specialist"}
            cardDesc={"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"}
            widthDesc={"w-183"}
          ></TeamCards>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <TeamCards
            imgTeam={emily}
            name={"Emily Johnson"}
            nameDesc={"PPC Manager"}
            cardDesc={"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"}
            widthDesc={"w-114"}
          ></TeamCards>

          <TeamCards
            imgTeam={brian}
            name={"Brian Williams"}
            nameDesc={"Social Media Specialist"}
            cardDesc={"4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"}
            widthDesc={"w-194"}
          ></TeamCards>

          <TeamCards
            imgTeam={sarah}
            name={"Sarah Kim"}
            nameDesc={"Content Creator"}
            cardDesc={`2+ years of experience in writing and editing
               Skilled in creating compelling, SEO-optimized content for various industries`}
            widthDesc={"w-194"}
          ></TeamCards>
        </div>
      </div>

      <div className="flex justify-end">
        <Button children={"See all team"} bgColor={"bg-darkGrey"} textColor={"text-white"} width="w-269"></Button>
      </div>
    </div>
  );
};
