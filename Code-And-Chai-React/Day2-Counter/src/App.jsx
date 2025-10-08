import React, { useState } from 'react' 
 

const App = () => {
  const [count, setCount] = useState(5)
  const increase = ()=>{
    setCount(count+1)
    console.log(count)
  }

  const decrease = ()=>{
    setCount((count)=>{
      if(count>0){
        return count-1
      }else{
        return 0
      }
    })
    console.log(count)
  }
  return (
    <>
      <h1>Code With Fun</h1>
      <h3>Counter Value:{count}</h3>
      <button onClick={increase}>Increase value +1</button>
      <br /><br />
      <button onClick={decrease}>Decrease value -1</button>
    </>
  )
}

export default App