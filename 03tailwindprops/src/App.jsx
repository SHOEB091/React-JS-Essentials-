import { useState } from 'preact/hooks'
import './app.css'
import Card from './components/Card'
export function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"Shoeb",
    age:21
  }
  let newArr = [1,2,3,4,5]


  return ( //fragments are used to return multiple elements
    <>  
    <h1 className="bg-green-600 text-black p-4 rounded-xl mb-4">Tailwind test </h1>
  
   {/* suppose we want to use the card with dirrerent usernames and button text wo here we use props to pass the values */}
    <div className='mb-5'>
    <Card username='shoeb iqbal ' btnText='Join Us!'/>
    </div>
    <Card username='JLG shoeb' btnText="Follow me "/>

    </>
  )
}
