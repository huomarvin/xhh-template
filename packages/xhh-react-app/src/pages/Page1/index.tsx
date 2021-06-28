import React from "react";
import "./index.scss";
import { Input } from "@components";
import testPng from "@imgs/test.png";

function Page1() {
  return (
    <div className="Page1">
      Hot test
      <img src={testPng} />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
}

export default Page1;
