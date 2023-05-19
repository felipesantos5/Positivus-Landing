import React, { useState } from "react";
import Paragraph from "../paragraph/paragraph";
import plusImage from "../../public/img/workingProcess/plus.png";
import minusImage from "../../public/img/workingProcess/minus.png";
import line from "../../public/img/workingProcess/Line.svg";

interface cardWorking {
  selected?: boolean;
  number: string;
  title: string;
  text?: string;
}

export const CardWorking = (props: cardWorking) => {
  const [image, setImage] = useState<string>(plusImage);
  const [hiddenDiv, sethiddenDiv] = useState(true);

  const toggleClasse = () => {
    sethiddenDiv(!hiddenDiv);
  };

  function changeImage() {
    if (image === plusImage) {
      setImage(minusImage);
    } else {
      setImage(plusImage);
    }
  }

  function toggleCard() {
    toggleClasse();
    changeImage();
  }

  return (
    <div className="border border-darkGrey drop-shadow-cardShadow rounded-cardRadius bg-white mb-8 px-16 py-10 flex flex-col">
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
      {/* hidden mt-7 */}
      <div className={`minha-div ${hiddenDiv ? "hidden" : ""}`}>
        <img src={line} alt="line" />
        <Paragraph width={""} children={"lorem yeqrwfrqewrqwrfew"}></Paragraph>
      </div>
    </div>
  );
};
