import React from "react";
import logoFooter from "../../public/img/footer/logoFooter.png";
import twiter from "../../public/img/footer/twitterIcon.svg";
import facebook from "../../public/img/footer/facebookIcon.svg";
import linkedin from "../../public/img/footer/linkedinIcon.svg";
import line from "../../public/img/footer/Line.png";
import { NavFooter } from "./navFooter";
import Button from "../default/button/button";
import Paragraph from "./../default/paragraph/paragraph";

export const Footer = () => {
  return (
    <footer className="bg-darkGrey h-514 rounded-footer px-60 py-14">
      <div className="flex justify-between gap-40">
        <img src={logoFooter} alt="logo" />
        <NavFooter></NavFooter>
        <div className="flex gap-5">
          <img src={linkedin} alt="linkedin logo" />
          <img src={facebook} alt="facebook logo" />
          <img src={twiter} alt="twiter logo" />
        </div>
      </div>

      <div className="flex justify-between mt-16">
        <div className="">
          <h3 className="bg-green rounded-md inline">Contact us:</h3>
          <div className="flex flex-col gap-5 mt-7">
            <Paragraph textColor="text-white" width={undefined}>
              Email: info@positivus.com
            </Paragraph>
            <Paragraph textColor="text-white" width={undefined}>
              Phone: 555-567-8901
            </Paragraph>
            <div>
              <Paragraph textColor="text-white" width={undefined}>
                Address: 1234 Main St
              </Paragraph>
              <Paragraph textColor="text-white" width={undefined}>
                Moonstone City, Stardust State 12345
              </Paragraph>
            </div>
          </div>
        </div>

        <div className="flex gap-5 bg-grey rounded-14 py-14 px-10">
          <input className="rounded-14 bg-grey border border-white px-8 w-286" type="text" placeholder="Email" />
          <Button children={"Subscribe to news"} bgColor={"bg-green"}></Button>
        </div>
      </div>

      <div>
        <img className="my-12" src={line} alt="line" />
        <div className="flex gap-10 text-white">
          <p className="text-footer">© 2023 Positivus. All Rights Reserved.</p>
          <p className="underline text-footer">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};
