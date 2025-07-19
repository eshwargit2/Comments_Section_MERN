import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Commant from './Commant.jsx'
import ViewComments from './ViewComments.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='text-black text-4xl text-bold  text-center '>MERN Comment Section</h2>
    <Commant/>
    <ViewComments/>
    </>
  )
}

export default App
