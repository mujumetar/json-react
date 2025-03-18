import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import MultiRangeSlider from "multi-range-slider-react";
import Display from './components/Display'
import Range from './components/range'

function App() {
  const [count, setCount] = useState(1)
  const [data, setData] = useState([])
  const [sort, setSort] = useState("")
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
    console.log(e)
  };
  function Fetchapi() {
    fetch(`http://localhost:8000/products?price_gte=${minValue}&price_lte=${maxValue}`)
      .then((res) => res.json())
      .then((res) => setData(res))

  }
  console.log(data)

  useEffect(() => {
    Fetchapi()

  }, [count, sort, minValue, maxValue])

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Range handleInput={handleInput} minValue={minValue} maxValue={maxValue}/>
      </div>
      <Display data={data} />
     
    </>
  )



}


export default App
