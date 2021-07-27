import React from "react";
import "./index.less";
import { Input } from "@components";
import { Button } from "antd";
import testPng from "@imgs/test.png";

function Page1() {
  return (
    <div className="Page1">
      <Button
        onClick={() => {
          console.log("Hello World");
        }}
      >
        Hello3
      </Button>
      Hot test13
      <Input />
      <Input />
      <Input />
      <Input />
      <img src={testPng} />
    </div>
  );
}

export default Page1;
