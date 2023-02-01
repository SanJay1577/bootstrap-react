import { useContext } from "react";
import { CounterContext } from "./Context/context";

export function Customer1() {
  const [state, dispatch] = useContext(CounterContext)
  return (
    <div>
      <p>Customer1</p>
    <h1>Remaining Shoes {state.products}</h1>
    <button
    onClick={()=>dispatch({type : "buy-one-item"})}
    >Buy Shoes</button>
  </div>
  );
}
