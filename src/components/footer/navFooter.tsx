import React from "react";
import Paragraph from "../default/paragraph/paragraph";

export const NavFooter = () => {
  return (
    <nav className="flex gap-10">
      <Paragraph textColor="text-white" textDecoration="underline" width={undefined}>
        About us
      </Paragraph>
      <Paragraph textColor="text-white" textDecoration="underline" width={undefined}>
        Services
      </Paragraph>
      <Paragraph textColor="text-white" textDecoration="underline" width={undefined}>
        Use Cases
      </Paragraph>
      <Paragraph textColor="text-white" textDecoration="underline" width={undefined}>
        Pricing
      </Paragraph>
      <Paragraph textColor="text-white" textDecoration="underline" width={undefined}>
        Blog
      </Paragraph>
    </nav>
  );
};
