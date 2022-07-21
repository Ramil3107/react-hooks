import React, { useState } from 'react';


function randomValue() {
  console.log("debug")
  return Math.floor(Math.random() * 10)
}

function UseState() {

  const [counter, setCounter] = useState(() => randomValue())
  const [state, setState] = useState({
    title: "I'm title",
    data: 2342234234234234
  })

  function increment() {
    setCounter(counter + 1)
    // setCounter(prev => prev +1)
    // setCounter(prev => prev +1)
  }

  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className='wrapper'>
      <div className='counter' >
        <h1>Counter</h1>
        {counter}
        <div className='buttons'>
          <button onClick={increment}>Increase</button>
          <button onClick={decrement}>Decrease</button>
          <button onClick={() => setState({ title: "changed state" })}>Change State</button>
        </div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default UseState;
