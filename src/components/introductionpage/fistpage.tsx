import React from "react";
import Button from "../default/button/button";
import ilustration from "../../public/img/firstPage/Illustration.png";
import Marks from "./brands/brands";
import Paragraph from "../default/paragraph/paragraph";

const firstPage = () => {
  return (
    <div className="flex-row">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="text-60 w-531 font-medium">Navigating the digital landscape for success</h1>
          <Paragraph width="w-498">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </Paragraph>
          <Button bgColor={"bg-darkGrey"} width="w-264" textColor="text-white">
            Book a consultation
          </Button>
        </div>
        <div>
          <img src={ilustration} alt="" />
        </div>
      </div>
      <div>
        <Marks></Marks>
      </div>
    </div>
  );
};

export default firstPage;
