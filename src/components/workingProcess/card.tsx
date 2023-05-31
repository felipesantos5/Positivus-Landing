import React, { useState } from "react";
import Paragraph from "../default/paragraph/paragraph";
import plusImage from "../../public/img/workingProcess/plus.png";
import minusImage from "../../public/img/workingProcess/minus.png";
import line from "../../public/img/workingProcess/Line.svg";
import "./cardWorkingAnimation.css";

interface cardWorking {
  selected?: boolean;
  number: string;
  title: string;
  text?: string;
}

export const CardWorking = (props: cardWorking) => {
  const [image, setImage] = useState<string>(plusImage);
  const [background, setBackground] = useState<string>("bg-white");
  const [hiddenDiv, sethiddenDiv] = useState(true);

  const toggleDiv = () => {
    sethiddenDiv(!hiddenDiv);
  };

  const toggleBackground = () => {
    setBackground(background === "bg-white" ? "bg-green" : "bg-white");
  };

  function changeImage() {
    if (image === plusImage) {
      setImage(minusImage);
    } else {
      setImage(plusImage);
    }
  }

  function toggleCard() {
    toggleDiv();
    toggleBackground();
    changeImage();
  }

  return (
    <div className={`border border-darkGrey drop-shadow-cardShadow rounded-cardRadius px-16 py-10 flex flex-col mb-7 ${background}`}>
      <div className="flex justify-between">
        <div className="flex gap-9 items-center">
          <h2 className="text-60 font-medium">{props.number}</h2>
          <h2 className="text-30 font-medium h-38">{props.title}</h2>
        </div>
        {
          <button className="" onClick={() => toggleCard()}>
            <img src={image} alt="button" />
          </button>
        }
      </div>
      {/* ${hiddenDiv ? "hidden" : ""} */}
      <div className={`mt-7 transition-opacity duration-500 animate-fade-in ${hiddenDiv ? "hidden" : "animate-slide-in"}`}>
        <img className="mb-7" src={line} alt="line" />
        <Paragraph
          width={""}
          children={
            "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
          }
        ></Paragraph>
      </div>
    </div>
  );
};
