import React from "react";

interface textFooter {
  children: string;
}

export const TextFooter = (props: textFooter) => {
  return <p className="text-">{props.children}</p>;
};
