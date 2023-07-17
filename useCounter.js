import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    handleIncrease,
    handleReset,
    handleDecrease,
  };
};
