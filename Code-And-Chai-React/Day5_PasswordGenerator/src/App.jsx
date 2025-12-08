import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null)
  const copyToClipboard = useCallback(() => {
    passRef.current?.select(); //use to select the text
    // passRef.current?.setSelectionRange(0, 4); used for copy a portion of text
    window.navigator.clipboard.writeText(password)

  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) string += "0123456789";
    if (character) string += "!@#$%^&*()";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, character, setPassword, numbers]);

  useEffect(() => {
    passwordGenerator();
  }, [length, character, numbers, passwordGenerator]);
 

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 bg-gray-600">
        <h1 className="text-white text-center mb-4 font-semibold text-2xl">
          Create Password
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4  ">
          <input
            type="text"
            value={[password]}
            ref={passRef}
            className="outline-none bg-white text-black w-full py-1 px-4 "
            placeholder="Password"
          />
          <button
          onClick={copyToClipboard} 
          className=" bg-blue-500 w-20 text-white font-bold px-2 py-0.5 shrink-4">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min="8"
              max="100"
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="charcterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="charcterInput">Character{character}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbers}
              id="numberInput"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number{numbers}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
