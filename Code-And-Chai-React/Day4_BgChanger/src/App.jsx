import React from "react";
import { useState } from "react";

function App() {

  const [bgColor, setbgColor] = useState('gray-');

  const changeBg = (Color) =>{
    setbgColor(Color)
    console.log("Color is changed")
  }


  return (
    <div className="text-center bg-gray-800 flex flex-col items-center justify-between w-full h-screen"
    style={{backgroundColor : bgColor}}>
      <h1 className="text-4xl">Change Background</h1>
      <div className="btns mb-10 text-3xl flex items-evenly justify-around  p-5 border-2 w-[80%]  ">
        <button onClick={()=> changeBg('blue')} className="btn p-5 bg-blue-600 cursor-pointer border-2 border-black rounded-md  ">Blue</button>
        <button onClick={()=> changeBg('red')} className="btn p-5 bg-red-600 cursor-pointer border-2 border-black rounded-md  ">Red</button>
        <button onClick={()=> changeBg('green')} className="btn p-5 bg-green-600 cursor-pointer border-2 border-black rounded-md  ">Green</button>
        <button onClick={()=> changeBg('yellow')} className="btn p-5 bg-yellow-600 cursor-pointer border-2 border-black rounded-md  ">Yellow</button>
        <button onClick={()=> changeBg('purple')} className="btn p-5 bg-purple-600 cursor-pointer border-2 border-black rounded-md  ">Purple</button>
        <button onClick={()=> changeBg('violet')} className="btn p-5 bg-violet-600 cursor-pointer border-2 border-black rounded-md  ">Violet</button> 
      </div>
    </div>
  );
}

export default App;
