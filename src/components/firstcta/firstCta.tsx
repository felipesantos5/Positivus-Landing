import React from "react";
import Button from "../default/button/button";
import Paragraph from "../default/paragraph/paragraph";
import Illustration from "../../public/img/firstCta/Illustration.png";

const FirstCta = () => {
  return (
    <div className="flex justify-between bg-lightGrey rounded-cardRadius mt-32 h-347">
      <div className="flex flex-col gap-6 justify-center ml-16">
        <h1 className="text-30 font-medium">Let’s make things happen</h1>
        <Paragraph width={"w-498"} children={"Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."}></Paragraph>
        <Button bgColor={"bg-darkGrey"} width="w-288" textColor="text-white">
          Get your free proposal
        </Button>
      </div>
      <div>
        <img src={Illustration} alt="illustration" className="relative top-23 mr-32" />
      </div>
    </div>
  );
};

export default FirstCta;
