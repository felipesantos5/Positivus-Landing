import React from "react";

interface Marks {
  photo?: string;
}

const Mark = (props: Marks) => {
  return <img src={props.photo} alt="logo mark" className="w-" />;
};

export default Mark;
