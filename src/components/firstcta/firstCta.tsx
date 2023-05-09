import React from "react";
import Button from "../button/button";
import Paragraph from "../paragraph/paragraph";
import Illustration from "../../public/img/firstCta/Illustration.png";

const FirstCta = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-30 font-medium">Let’s make things happen</h1>
        <Paragraph width={"498"} children={"Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."}></Paragraph>
        <Button bgColor={"bg-darkGrey"} width="w-288" textColor="black">
          Get your free proposal
        </Button>
      </div>
      <div>
        <img src={Illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default FirstCta;
