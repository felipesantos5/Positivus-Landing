import React from "react";

interface paragraphProps {
  width: React.ReactNode;
  children: string;
  textColor?: string;
  textDecoration?: string;
}

const Paragraph = (props: paragraphProps) => {
  const pClassName = `text-black  font-normal text-18 ${props.width} ${props.textColor} ${props.textDecoration}`;

  return <p className={pClassName}>{props.children}</p>;
};

export default Paragraph;
