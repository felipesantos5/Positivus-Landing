import React from "react";
import amazon from "../../public/img/firstPage/marks/amazon.svg";
import dribble from "../../public/img/firstPage/marks/dribble.svg";
import hubspot from "../../public/img/firstPage/marks/hubspot.svg";
import netflix from "../../public/img/firstPage/marks/netflix.svg";
import notion from "../../public/img/firstPage/marks/notion.svg";
import zoom from "../../public/img/firstPage/marks/zoom.svg";

import Mark from "../introductionpage/mark";

const Marks = () => {
  return (
    <div className="flex gap-24 justify-center">
      <Mark photo={amazon}></Mark>
      <Mark photo={dribble}></Mark>
      <Mark photo={hubspot}></Mark>
      <Mark photo={netflix}></Mark>
      <Mark photo={notion}></Mark>
      <Mark photo={zoom}></Mark>
    </div>
  );
};

export default Marks;
