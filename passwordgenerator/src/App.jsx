import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(4);
  const [numAllowed, setNumallowed] = useState(false);
  const [charAllowed, setCharallowed] = useState(false);
  const [Password, setPassword] = useState("");
  const Passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]?/_-+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(pass);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 text-orange-500 bg-gray-700">
<div className="flex shadow rounded-lg overflow-hidden mb-4">
  <input type="text"
   />
</div>

    </div>
    </>
  );
}

export default App;
