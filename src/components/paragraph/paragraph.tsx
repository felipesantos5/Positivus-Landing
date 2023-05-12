import React from "react";

interface Marks {
  width: string | number;
  children: string;
}

const Paragraph = (props: Marks) => {
  const pClassName = `text-black ${props.width} font-normal leading-7 text-20`;

  return <p className={pClassName}>{props.children}</p>;
};

export default Paragraph;
