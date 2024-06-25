import { useCallback } from "react";
import { useState } from "react";

export function useCount(initialState = 0) {
  const [count, setCount] = useState(initialState);

  const decrement = useCallback(() => {
    setCount((currentCount) => currentCount - 1);
  }, []);

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);

  return { count, decrement, increment };
}
