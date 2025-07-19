import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Commant from './Commant.jsx'
import ViewComments from './ViewComments.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
    <div class="background">

  <span class="ball"></span>
  <span class="ball"></span>
  <span class="ball"></span>
  <span class="ball"></span>
  <span class="ball"></span>
  <span class="ball"></span>
</div>
    <h2 className='text-black text-4xl text-bold  text-center '>MERN Comment Section</h2>
    <div className='d-flex justify-center items-center flex-col'>
       <Commant/>
    <ViewComments/>
    </div>
   
    </div>
  )
}

export default App
