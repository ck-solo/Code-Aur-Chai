import React, { useState } from 'react'

const UseState = () => {
  const [user, setuser] = useState(10)


  function increase(){
    setuser(user+1)
  }
  function decrease(){
    setuser(user-1)
  }
  return (
    <div className='p-20 '>
      <h1 className='mb-10'>Value of clcik is {user}</h1>
      <div className='flex items-center gap-20'>
      <button 
      onClick={increase}
      className='bg-blue-800 rounded-2xl p-3'>Increment</button>
      <button
      onClick={decrease} 
      className='bg-blue-800 rounded-2xl p-3'>Decrement</button>
      </div>
    </div>
  )
}

export default UseState