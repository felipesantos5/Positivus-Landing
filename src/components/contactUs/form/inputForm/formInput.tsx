import React from "react";
import { InputForm } from "./imputForm";
import Button from "../../../default/button/button";

export const FormInput = () => {
  return (
    <div className="max-w-xl">
      <InputForm id={"name"} type={"text"} label={"Name"} placeHolder={"Name"}></InputForm>

      <InputForm id={"email"} type={"email"} label={"Email*"} placeHolder={"Email"}></InputForm>

      <InputForm id={"message"} type={"text"} label={"Message*"} placeHolder={"Message"}></InputForm>

      <Button children={"Send Message"} bgColor={"bg-darkGrey"} textColor="text-white" width="w-576"></Button>
    </div>
  );
};
