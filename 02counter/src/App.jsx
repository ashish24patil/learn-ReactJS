import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 15) {
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <div className='box'>
        <h1 className='title'>This is simple counter program</h1>
        <h2>Counter Value : {counter}</h2>
        <div className='buttonContainer'>
          <button className='plus' onClick={addValue}>Increase Value</button>
          <br />
          <button className='minus' onClick={removeValue}>Decrese Value</button>
        </div>
      </div>
    </>
  )
}

export default App
