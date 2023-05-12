import React from "react";
import darkIcon from "../../public/img/serviceCardImg/darkIcon.svg";
import whiteIcon from "../../public/img/serviceCardImg/whiteIcon.svg";
interface ServiceCardProps {
  variant: 'default' | 'white' | 'dark' | 'green';
  children1: string;
  children2: string;
  imgService: string;
  widthImage: string;
  defaultStyle?: string;
}

export const ServiceCard = (props: ServiceCardProps) => {
  const {variant} = props;
  const style = "border border-darkGrey drop-shadow-cardShadow rounded-cardRadius";

  switch (variant) {
    case 'default':
      return <DefaultCard defaultStyle={style} {...props}/>;
    case 'white':
      return <WhiteCard defaultStyle={style} {...props}/>;
    case 'dark':
      return <DarkCard defaultStyle={style} {...props}/>;
    case 'green':
      return <GreenCard defaultStyle={style} {...props}/>;
  }
};
export const DefaultCard = (props: ServiceCardProps) => {
  const {children1, children2, imgService, widthImage, defaultStyle} = props;

  return(
    <div className={`${defaultStyle}`}>
      <div className="flex grid-cols-2 justify-between mx-12 my-12">
        <div className="flex flex-col gap-20">
          <div className="">
            <h1 className={`font-medium text-30 inline-block p-1 rounded-lg text-black`}>{props.children1}</h1>
            <h2 className={`font-medium text-30 inline-block p-1 rounded-lg text-black`}>{props.children2}</h2>
          </div>
          <div className="flex flex-row items-center gap-3.5">
            <img src= {darkIcon} alt="Service card icon" />
            <p>Learn more</p>
          </div>
        </div>
        <div>
          <img src={props.imgService} alt="Service card image" className={`${props.widthImage}`} />
        </div>
      </div>
    </div>
  )
};

export const WhiteCard = (props: ServiceCardProps) => {
  const {children1, children2, imgService, widthImage, defaultStyle} = props;
  
  return (
    <div className={`${defaultStyle} bg-white`}>
    <div className="flex grid-cols-2 justify-between mx-12 my-12 items-center">
      <div className="flex flex-col gap-20">
        <div className="">
          <h1 className={`font-medium text-30 inline-block p-1 rounded-lg text-black bg-green`}>{props.children1}</h1>
          <h2 className={`font-medium text-30 inline-block p-1 rounded-lg text-black bg-green`}>{props.children2}</h2>
        </div>
        <div className="flex flex-row items-center gap-3.5">
          <img src= {darkIcon} alt="Service card icon" />
          <p className="text-black">Learn more</p>
        </div>
      </div>
      <div>
        <img src={props.imgService} alt="Service card image" className={`${props.widthImage}`} />
      </div>
    </div>
  </div>
  )  
};

export const DarkCard = (props: ServiceCardProps) => {
  const {children1, children2, imgService, widthImage, defaultStyle} = props;

  return (
    <div className={`${defaultStyle} bg-darkGrey`}>
    <div className="flex grid-cols-2 justify-between mx-12 my-12 items-center">
      <div className="flex flex-col gap-20">
        <div className="">
          <h1 className={`font-medium text-30 inline-block p-1 rounded-lg text-black bg-white`}>{props.children1}</h1>
          <h2 className={`font-medium text-30 inline-block p-1 rounded-lg text-black bg-white`}>{props.children2}</h2>
        </div>
        <div className="flex flex-row items-center gap-3.5">
          <img src= {whiteIcon} alt="Service card icon" />
          <p className="text-white">Learn more</p>
        </div>
      </div>
      <div>
        <img src={props.imgService} alt="Service card image" className={`${props.widthImage}`} />
      </div>
    </div>
  </div>
  )  
};

export const GreenCard = (props: ServiceCardProps) => {
  const {children1, children2, imgService, widthImage, defaultStyle} = props;

  return (
    <div className={`${defaultStyle} bg-green`}>
    <div className="flex grid-cols-2 justify-between mx-12 my-12 items-center">
      <div className="flex flex-col gap-20">
        <div className="">
          <h1 className={`font-medium text-30 inline-block p-1 rounded-lg text-black bg-white`}>{props.children1}</h1>
          <h2 className={`font-medium text-30 inline-block p-1 rounded-lg text-black bg-white`}>{props.children2}</h2>
        </div>
        <div className="flex flex-row items-center gap-3.5">
          <img src= {darkIcon} alt="Service card icon" />
          <p className="text-black">Learn more</p>
        </div>
      </div>
      <div>
        <img src={props.imgService} alt="Service card image" className={`${props.widthImage}`} />
      </div>
    </div>
  </div>
  )  
};