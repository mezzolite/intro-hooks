import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0) //destructuring from useState: count is state, setCount is setState
  
  useEffect(() => {
    let id = setTimeout(() => {
      document.title = `Current count ${count}`
      setCount(count + 1)
    }, 1000) // this is where a fetch function would go

    return () => clearTimeout(id)
  }, [count])

  return (
    <div className="App">
      <h1> Counter App </h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
