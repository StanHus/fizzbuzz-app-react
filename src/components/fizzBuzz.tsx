import {useState} from "react";

export default  function FizzBuzzCount (): JSX.Element {

  const [state, setState] =
  useState<number>(0);
  
  const [currentValues, newValues] =
  useState<number[]>([]);

  const count = () => {
    setState(state + 1);

    newValues([
      ...currentValues,
      state,
    ]);
}
    return (
        <div>
          <h1>FizzBuzz</h1>
          <p>Sequence: {currentValues.join(", ")}</p>
          <button onClick={count}>next</button>
        </div>
      );
}