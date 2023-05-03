import React from "react";

interface Marks {
  width: string | number;
  children: string;
}

const Paragraph = (props: Marks) => {
  const pClassName = `text-black w-${props.width}`;

  return <p className={pClassName}>{props.children}</p>;
};

export default Paragraph;
