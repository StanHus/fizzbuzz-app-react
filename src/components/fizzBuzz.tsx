import {useState} from "react";

export default  function FizzBuzzCount (): JSX.Element {

  const [state, setState] =
  useState<(number | string)>(0);
  
  const [currentValues, newValues] =
  useState<(number | string)[]>([0]);

  const count = () => {
    setState(state + 1);

        //state isn't a number. What is it???
    if (state % 3 ==0 ) {
        setState("fizz")
    }

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