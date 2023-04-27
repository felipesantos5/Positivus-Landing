import React from "react";
import logo from "../../public/img/logo/logo.svg";
import Button from "../button/button";
import { Anchor } from "./anchor";

function Header() {
  return (
    <div className="flex justify-around">
      <img src={logo} alt="logo Positivus" />
      <div className="flex items-center">
        <nav className="flex gap-10">
          <Anchor>About us</Anchor>
          <Anchor>Services</Anchor>
          <Anchor>Use Cases</Anchor>
          <Anchor>Pricing</Anchor>
          <Anchor>Blog</Anchor>
        </nav>
        <Button bgColor={"bg-white"}>Request a quote</Button>
      </div>
    </div>
  );
}

export default Header;
