import { useState } from "react";

export default function FizzBuzzCount(): JSX.Element {
  const [state, setState] = useState<number>(1);

  const [currentValues, newValues] = useState<(number | string)[]>([0]);

  const count = () => {
    setState(state + 1);

    if (state % 3 === 0 && state % 15 !== 0) {
      newValues([...currentValues, "fizz"]);
    } else if (state % 5 === 0 && state % 15 !== 0) {
      newValues([...currentValues, "buzz"]);
    } else if (state % 15 === 0) {
      newValues([...currentValues, "fizzbuzz"]);
    } else {
      newValues([...currentValues, state]);
    }
  };
  return (
    <div>
      <h1>FizzBuzz</h1>
      <p>Sequence: {currentValues.join(", ")}</p>
      <button onClick={count}>next</button>
    </div>
  );
}
