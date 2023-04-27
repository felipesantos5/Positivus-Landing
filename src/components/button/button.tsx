import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  bgColor: string;
}

const Button = (props: ButtonProps) => {
  const btnClassName = `rounded-2xl border-2 border-black py-5 px-9 h-16 font-primary text-center ${props.bgColor}`;

  return <button className={btnClassName}>{props.children}</button>;
};

export default Button;
