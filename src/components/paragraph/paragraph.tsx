import React from "react";

interface Paragraph {
  width: string;
  children: string;
}

const Paragraph = (props: Paragraph) => {
  const pClassName = `text-black ${props.width} font-normal text-18`;

  return <p className={pClassName}>{props.children}</p>;
};

export default Paragraph;
