import React from "react";

interface paragraphProps {
  width: string | React.ReactNode;
  children: string;
  textColor?: string;
}

const Paragraph = (props: paragraphProps) => {
  const pClassName = `text-black ${props.width} font-normal text-18 ${props.textColor}`;

  return <p className={pClassName}>{props.children}</p>;
};

export default Paragraph;
