import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'mongoose';

function App() {
  
  /* Assignment : if click on add its value should not be greater than 30
  and when click on remove its value cannot goes negative */

  let[value , setValue] = useState(0);
  const addValue1 =()=>{
    if(value == 22){
      setValue(value=22);
    }
    else{
      setValue(value+1);
    }
  }

  const removeValue1 =()=>{
    if(value >0){
      setValue(value-1);
    }
    else{
      setValue(value=0);  
    }
  }


  //React hooks is used to update the UI and the target value is updated


  //Use state se do cheeze milti hai Array ke Format me 
 // let [counter , setCounter ] = useState(0);



  //different different valriables value changes with simple java script but in ract to over come this React hooks is used to get the UI updated and a target value is updated

  // UI updation ko react controll karta hai 
  //let counter = 6;
  const addValue = ()=>{
    console.log("clicked", Math.random());
   counter = counter+1;
   setCounter(counter);

  }
  const removeValue = ()=>{
    //console.log("clicked", Math.random());
   counter = counter-1;
   setCounter(counter);

  }


  return (
   <>
   <h1>Chai aur React </h1>
   <h2>Counter Value : {value} </h2>

   <button onClick={addValue1}>Add Value</button>
   <br></br>
   <br></br>
   <button onClick={removeValue1}>Remove value </button>
   </>
  )
}

export default App
