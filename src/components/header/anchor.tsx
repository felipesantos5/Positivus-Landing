import React from "react";

interface anchorProps {
  children: string;
}

export const Anchor = (props: anchorProps) => {
  return (
    <a href="#" className="font-normal leading-7 text-20">
      {props.children}
    </a>
  );
};
