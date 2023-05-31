import React from "react";
import { InputRadio } from "./inputRadio";

export const FormInputRadio = () => {
  return (
    <div className="flex items-center gap-8">
      <InputRadio id={"qwer"} label={"Say Hi"}></InputRadio>
      <InputRadio id={"qwer"} label={"Get a Quote"}></InputRadio>
    </div>
  );
};
