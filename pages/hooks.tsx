import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Wrapper } from "../components/Wrapper/Wrapper";
import styles from "../styles/Home.module.css";
import data from "./data.json";
import links from "./links.json";
const Hooks: NextPage = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [display, setDisplay] = useState("none");
  const [width, setWidth] = useState("3");
  const handleCount = () => {
    setCount(count + 1);
  };

  function handleColor() {
    const nextColor = color === "red" ? "blue" : "red";
    setColor(nextColor);
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
    <>
      <Wrapper>
        <div className="inline-flex justify-center wrap w-full">
          <div className="flex w-full">
            <button onClick={handleCount} className="bg-blue-700 p-6">
              Click me to increase count
            </button>
            <span className="text-purple-600 text-xl m-3">{count}</span>
          </div>
          <div className="flex w-full">
            <button onClick={handleColor} className="bg-red-700">
              Color change
            </button>
            <div className="bg-green-900 h-25 w-25" style={{ color }}>
              Color Box
            </div>
          </div>
          <div className="flex w-full">
            <button onClick={handleHide} className="bg-pink-700">
              Show Hide
            </button>
            <div style={{ display }} className="h-10 w-10 bg-yellow-400">
              Making it big
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Hooks;
