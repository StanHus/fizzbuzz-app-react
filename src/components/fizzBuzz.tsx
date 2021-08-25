import {useState} from "react";

export default  function FizzBuzzCount (): JSX.Element {

  const [state, setState] =
  useState<number>(0);
  
  const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
  useState<number[]>([]);

  const handleStoreCurrentCount = () => {
    setState(state + 1);
    queueRerenderWithNewStoredValues([
      ...storedValuesFromCurrentRender,
      state,
    ]);
}
    return (
        <div>
          <h1>FizzBuzz</h1>
          <p>Sequence: {storedValuesFromCurrentRender.join(", ")}</p>
          <button onClick={handleStoreCurrentCount}>next</button>
        </div>
      );
}