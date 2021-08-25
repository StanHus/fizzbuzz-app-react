import {useState} from "react";

export default  function FizzBuzzCount (): JSX.Element {
    
  const [state, setState] =
  useState(0);
const [storedValuesFromCurrentRender, setState] =
  useState<number[]>([]);

const handleStoreCurrentCount = () => {
  seState([
    ...storedValuesFromCurrentRender,
    state,
  ]);
};
  const addOne = () => {
    setState(state + 1);
  };
    return (
        <>
          <h1>FizzBuzz</h1>
          <p>Sequence: {storedValuesFromCurrentRender.join(", ")}</p>
          <button onClick={addOne}>next</button>

        </>
      );
}