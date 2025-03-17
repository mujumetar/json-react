import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(1)
  const [data, setData] = useState([])


  function Fetchapi() {
    fetch(`http://localhost:8000/products`)
      .then((res) => res.json())
      .then((res) => setData(res))
      
  }
  console.log(data)

  useEffect(() => {
    Fetchapi()
  }, [count])





  return (
    <>
      <Navbar />
      <Display data={data}/>
    </>
  )
}

export default App
