import React, { useState } from "react";

function App() {
  const [character, setcharacter] = useState("Alphabet");
  const [length, setlength] = useState(8);
  const [password, setpassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h2 className="text-4xl font-bold">Password Generator</h2>
      <div>
        <form>
          <input className="border-white border-2 rounded-md   p-4" type="text" placeholder="Generate Password" />
          <br />
          <button className="bg-zinc-400  p-2 mt-4 ">Generate</button>
          <br />
          <br />
          <div className="checkbox gap-10">
          <input type="checkbox" name="pass" value={"Alphabet"} /> Alphabet
          <input type="checkbox" name="pass" value={"Numbers"} /> Numbers
          <input type="checkbox" name="pass" value={"Symbols"} /> Symbols
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
