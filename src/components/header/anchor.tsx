import React from "react";

interface anchorProps {
  children: string;
}

export const Anchor = (props: anchorProps) => {
  return (
    <a href="#" className="text-xl">
      {props.children}
    </a>
  );
};
