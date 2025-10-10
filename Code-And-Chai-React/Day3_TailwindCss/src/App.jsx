 import React from 'react'
import Card from './components/Card'
 
 function App() {
   return (
     <>
      <div className="flex flex-col items-center ">
      <h1 className="text-4xl m-5 bg-green-700 p-2 rounded-md text-center w-fit">
        TailwindCss
      </h1>
      <Card title="Card 1" btnText="Add to Cart"/>
      <Card title="Card 2"  />
    </div>
     </>
   )
 }
 
 export default App