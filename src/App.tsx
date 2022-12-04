 
import reactLogo from "./assets/react.svg";
 
import "./App.scss";
import { useState } from "react";

 

function App() {
 
  return (
 <>
  <div className="main">
    hello there lmao awd 
    <div className="counter-area">
    <Counter />
    </div>
  </div>
 </>

  );
}


function Counter() : JSX.Element {
  const [count, setCount] = useState<number>(0);
  return(
    <>
      <h1>Counter: {count} </h1>
      <button onClick={() => { setCount(count + 5) }}>Increase by 5!</button>
    </>
  )
}




export default App;
