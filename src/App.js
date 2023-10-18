import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("violet");

  return (
    <>
    {/* <h1 className="justify-center">This is a Color Change Page</h1> */}
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
            <button
              onClick={()=> setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={()=> setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={()=> setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={()=> setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={()=> setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-2xl"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={()=> setColor("white")}
              className="outline px-4 py-1 rounded-full text-black shadow-2xl"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={()=> setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={()=> setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-2xl"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={()=> setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
              onClick={()=> setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              onClick={()=> setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
