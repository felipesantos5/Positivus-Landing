import React from "react";
import Button from "../button/button";
import Paragraph from "../paragraph/paragraph";
import Illustration from "../../public/img/firstCta/Illustration.png";

const FirstCta = () => {
  return (
    <div className="flex justify-between bg-grey rounded-cardRadius mt-32 h-347 ml-14 mr-36">
      <div className="flex flex-col gap-6 justify-center">
        <h1 className="text-30 font-medium">Let’s make things happen</h1>
        <Paragraph width={"w-498"} children={"Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."}></Paragraph>
        <Button bgColor={"bg-darkGrey"} width="w-288" textColor="text-white">
          Get your free proposal
        </Button>
      </div>
      <div>
        <img src={Illustration} alt="illustration" className="relative top-23 left-20" />
      </div>
    </div>
  );
};

export default FirstCta;
