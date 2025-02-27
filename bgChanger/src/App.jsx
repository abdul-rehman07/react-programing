import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen  duration-200  "
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 mb-14 inset-x-0 px-2 ">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3  py-2 rounded-3xl ">
          <button
            onClick={() => setColor("red")}
            className="text-white outline-none px-4 outline-dashed  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("gray")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("orange")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("pink")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("brown")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("green")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("black")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("purple")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("cyan")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
          <button
            onClick={() => setColor("navy")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "navy" }}
          >
            Navy
          </button>
          <button
            onClick={() => setColor("violet")}
            className="text-white outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
        </div>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 mb-1 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("blue")}
            className="text-black outline-none px-4  rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "none" }}
          >
            Reset
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
