import React from "react";

interface brandsProps {
  photo?: string;
}

const Brand = (props: brandsProps) => {
  return <img src={props.photo} alt="logo Brand" className="w-" />;
};

export default Brand;
