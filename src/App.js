
import { useContext, useReducer } from 'react';
import './App.css';
import { BootStarpAccordian } from './BootStarpAccordian';
import { CounterContext } from './Context/context';
import { Customer1 } from './Customer1';
import { Customer2 } from './Customer2';
import { reducer } from './redcuer';


// states and dispatch 

function App() {
  const [state, dispatch] = useReducer(reducer, {products : 30,})
  return (
    <div>
      {/* //<BootStarpAccordian/> */}
      <CounterContext.Provider value={[state, dispatch]}>
           <Customer1/>
           <Customer2/>
      
           <Admin/>
      </CounterContext.Provider>
    </div>
  );
}

export default App;



function Admin () {
  const [state, dispatch] = useContext(CounterContext)
  return (
    <div>
      <h1>Admin</h1>
    <button
    onClick={()=>dispatch({type:"refill-product", quantity:50})}
    >
      Re fill
    </button>
    </div>
  )
}