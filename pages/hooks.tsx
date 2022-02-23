import type { NextPage } from "next";
import { useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { countCode, randomColor } from "./hooksCode";

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
    <div className="bg-custom-custom-001 min-h-screen ">
      <Wrapper>
        <div className="lg:w-1/3 sm:w-full mx-8 ">
          <code>{countCode}</code>
        </div>
        <div className="lg:w-1/3 sm:w-full mx-8">➡️</div>
        <div className="lg:w-1/3 sm:w-full mx-8">
          <button
            onClick={handleColor}
            className="h-25 w-25 p-6"
            style={{ color }}
          >
            Color Box
          </button>
        </div>
      </Wrapper>
      {/* <Wrapper>
        <div className="inline-flex wrap items-center justify-evenly lg:w-full sm:w-auto ">
          <div className="lg:w-1/3  mx-8">
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
      </Wrapper> */}
      <Wrapper>
        <div className="inline-flex wrap items-center justify-evenly lg:w-full sm:w-auto ">
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

      <Wrapper>
        <div className="inline-flex wrap items-center justify-evenly w-full">
          <div className="lg:w-1/3 sm:w-auto mx-8">
            <button onClick={handleHide} className="bg-pink-700 p-6">
              Show Hide
            </button>
          </div>
          <div className="text-xl lg:1/3">➡️</div>
          <div className="w-1/3 mx-8 ">
            <div style={{ display }} className="bg-lime-400 p-6">
              Hi there!
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hooks;
