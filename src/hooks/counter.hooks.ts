import { useState } from "react";

export function useCounter(initialCount: number = 0) {
  const [count, setCount] = useState(initialCount);

  return {
    count,
    increment: () => setCount((prev) => prev + 1),
    decrement: () => setCount((prev) => prev - 1),
  };
}
