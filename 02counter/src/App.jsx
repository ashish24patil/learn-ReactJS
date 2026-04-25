import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter + 1);
    if(counter == 0 && counter >=20){}
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>This is simple counter program</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={removeValue}>Decrese Value</button>
    </>
  )
}

export default App
