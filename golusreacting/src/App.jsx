import React, { useState } from 'react'
import Products from './Products'

function App (){
  var [a,b]=useState(69);
  return (

    <div className = "w-full h-screen bg-zinc-900 text-white">
      <Products  name="value" data={{age:25 , name: "harsh" }}/>
      {/* <h1>{a}</h1> */}
      {/* <button onClick={()=>b(a+1)} className='px-3 py-1 bg-green-500 rounded-md text-xs'>click</button> */}
    </div>
    

    /*<div className="w-full h-screen bg-zinc-900 p-4" >
      <div className="w-44 h-32 rounded-xl bg-red-600 p-3 text-white">
          <h3>hello kaise ho </h3>
      </div>
      <Products/>
    </div>*/
  )
}

export default App
