import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Code, CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import NavBar from "../components/NavBar/NavBar";
import { Wrapper } from "../components/Wrapper/Wrapper";
import styles from "../styles/Home.module.css";
import data from "./data.json";
import { countCode, randomColor } from "./hooksCode";
import links from "./links.json";
const Hooks: NextPage = () => {
  const [color, setColor] = useState(randomColor);
  const [display, setDisplay] = useState("none");
  const [width, setWidth] = useState("3");
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  function handleColor() {
    const color = "blue";
    setColor(color);
  }
  function handleSize() {
    const changeSize = width === "300px" ? "600px" : "300px";
    setDisplay(changeSize);
  }
  function handleHide() {
    const showDiv = display === "none" ? "block" : "none";
    setDisplay(showDiv);
  }

  return (
    <div className="bg-custom-custom-001 h-screen py-10">
      <Wrapper>
        <div className="inline-flex wrap items-center justify-evenly w-full">
          <div className="lg:w-1/3 sm:w-auto mx-8">
            <CodeBlock
              text={countCode}
              language="javascript"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
          </div>
          <div className="text-xl lg:1/3">➡️</div>
          <div className="w-1/3 mx-8 ">
            <button onClick={handleCount} className="bg-blue-700 p-6 w-full">
              Click me to increase count <br></br>
              {count}
            </button>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="inline-flex wrap items-center justify-evenly w-full">
          <div className="lg:w-1/3 sm:w-auto mx-8">
            <button onClick={handleColor} className="bg-red-700">
              Color change
            </button>
          </div>
          <div className="text-xl lg:1/3">➡️</div>
          <div className="w-1/3 mx-8 ">
            <button
              onClick={handleColor}
              className="h-25 w-25 p-6"
              style={{ color }}
            >
              Color Box
            </button>
          </div>
        </div>
      </Wrapper>
      {/* 
          <div className="flex w-full">
            <button onClick={handleHide} className="bg-pink-700">
              Show Hide
            </button>
            <div style={{ display }} className="h-10 w-10 bg-yellow-400">
              Making it big
            </div>
          </div> */}
    </div>
  );
};

export default Hooks;
