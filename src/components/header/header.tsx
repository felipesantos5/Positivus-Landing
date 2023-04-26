import React from "react";
import logo from "../../public/img/logo/logo.svg";
import Button from "../button/button";

function Header() {
  return (
    <div className="flex ">
      <img src={logo} alt="logo Positivus" />
      <div>
        <nav>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </nav>
        <Button bgColor={"bg-white"}>Request a quote</Button>\
      </div>
    </div>
  );
}

export default Header;
