import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(4);
  const [numAllowed, setNumallowed] = useState(false);
  const [charAllowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordref = useRef(null);

  const Passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]?/_-+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

const copyPasswordToClipboard = useCallback(
  () => { 
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,5);
     window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(() => {
    Passwordgenerator();
  }, [length, numAllowed, charAllowed, Passwordgenerator]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 text-orange-500 bg-gray-700"
      >
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-mone bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberinput"
              onChange={() => {
                setNumallowed((prev) => !prev);
              }}
            />
            <label htmlFor="nmuberinput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterinput"
              onChange={() => {
                setCharallowed((prev) => !prev);
              }}
            />
            <label htmlFor="nmuberinput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
