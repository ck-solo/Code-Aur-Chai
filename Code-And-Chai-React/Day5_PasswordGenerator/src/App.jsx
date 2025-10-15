import React, { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState("Alphabet");
  const [numbers, setNumbers] = useState('')
  const [password, setPassword] = useState(""); 
   
  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numbers) string += '0123456789'
    if(character) string += '!@#$%^&*()'
    for(let i = 1; i <= array.length; i++){
      let char = string[Math.floor(Math.random() * string.length)]
      pass = string.charAt(char)
    }
    setPassword(pass)


  }, [length,character,setPassword,numbers]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg  flex flex-col items-center justify-center h-screen gap-10">
      <h2 className="text-4xl font-bold">Password Generator</h2>
      <div>
        <form>
          <input className="border-white border-2 rounded-md   p-4" type="text" placeholder="Generate Password" />
          <br />
          <button onClick={()=>{passwordGenerator}} className="bg-zinc-400  p-2 mt-4 ">Generate</button>
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
