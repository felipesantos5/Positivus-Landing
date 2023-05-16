import React from "react";
import { CardWorking } from "./card";

export const CardsWorking = () => {
  return (
    <div>
      <CardWorking selected={false} number={"01"} title={"Consultation"}></CardWorking>
      <CardWorking selected={false} number={"02"} title={"Research and Strategy Development"}></CardWorking>
      <CardWorking selected={false} number={"03"} title={"Implementation"}></CardWorking>
      <CardWorking selected={false} number={"04"} title={"Monitoring and Optimization"}></CardWorking>
      <CardWorking selected={false} number={"05"} title={"Reporting and Communication"}></CardWorking>
      <CardWorking selected={false} number={"06"} title={"Continual Improvement"}></CardWorking>
    </div>
  );
};
