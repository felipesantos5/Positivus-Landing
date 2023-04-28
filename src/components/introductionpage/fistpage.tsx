import React from "react";
import Button from "../button/button";
import ilustration from "../../public/img/firstPage/Illustration.png";
import Marks from "../marks/brands";

const firstPage = () => {
  return (
    <div className="mx-24">
      <div className="flex gap-24">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl w-531">Navigating the digital landscape for success</h1>
          <p className="w-96">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <Button bgColor={"bg-darkGrey"} width="264">
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
