import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  bgColor: string;
  width?: string;
  textColor: string;
}

const Button = (props: ButtonProps) => {
  const btnClassName = `block rounded-2xl border-2 border-black py-5 px-9 h-16 font-primary text-center ${props.bgColor} ${props.textColor} ${props.width}`;

  return <button className={btnClassName}>{props.children}</button>;
};

export default Button;
