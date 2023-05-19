import React from "react";
import amazon from "../../../public/img/firstPage/brandsImage/amazon.svg";
import dribble from "../../../public/img/firstPage/brandsImage/dribble.svg";
import hubspot from "../../../public/img/firstPage/brandsImage/hubspot.svg";
import netflix from "../../../public/img/firstPage/brandsImage/netflix.svg";
import notion from "../../../public/img/firstPage/brandsImage/notion.svg";
import zoom from "../../../public/img/firstPage/brandsImage/zoom.svg";

import Brand from "./brand";

const Brands = () => {
  return (
    <div className="flex flex-wrap justify-between mt-16">
      <Brand photo={amazon}></Brand>
      <Brand photo={dribble}></Brand>
      <Brand photo={hubspot}></Brand>
      <Brand photo={netflix}></Brand>
      <Brand photo={notion}></Brand>
      <Brand photo={zoom}></Brand>
    </div>
  );
};

export default Brands;
