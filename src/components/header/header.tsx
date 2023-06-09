import React from "react";
import logo from "../../public/img/logo/logo.svg";
import Button from "../default/button/button";
import { Anchor } from "./anchor";

function Header() {
  return (
    <header className="flex justify-between mt-10 mb-16">
      <img src={logo} alt="logo Positivus" />
      <div className="flex items-center">
        <nav className="flex gap-10 mr-10">
          <Anchor>About us</Anchor>
          <Anchor>Services</Anchor>
          <Anchor>Use Cases</Anchor>
          <Anchor>Pricing</Anchor>
          <Anchor>Blog</Anchor>
        </nav>
        <Button bgColor={"bg-white"} textColor="black" width="w-231">
          Request a quote
        </Button>
      </div>
    </header>
  );
}

export default Header;
