import React from "react";

interface Brands {
  photo?: string;
}

const Brand = (props: Brands) => {
  return <img src={props.photo} alt="logo Brand" className="w-" />;
};

export default Brand;
