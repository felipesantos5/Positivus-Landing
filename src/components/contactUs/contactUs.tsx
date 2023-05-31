import React from "react";
import { SectionTitle } from "../default/title/title";
import { FormInput } from "./form/inputForm/formInput";
import { FormInputRadio } from "./form/inputRadio/formInputRadio";
import illustration from "../../public/img/contactUs/Illustration.png";

export const ContactUs = () => {
  return (
    <div className="flex items-center">
      <div>
        <SectionTitle title={"Contact Us"} desc={"Connect with Us: Let's Discuss Your Digital Marketing Needs"}></SectionTitle>
        <div className="flex justify-between w-1340 bg-lightGrey rounded-cardRadius pl-100 pt-16 pb-20 mb-36">
          <div className="flex flex-col gap-9 mb-10">
            <FormInputRadio></FormInputRadio>
            <FormInput></FormInput>
          </div>

          <div>
            <img className="" src={illustration} alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};
