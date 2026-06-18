import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const save = (nextValue) => {
    setValue((currentValue) => {
      const valueToStore =
        typeof nextValue === "function" ? nextValue(currentValue) : nextValue;

      try {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch {
        // The app still works if private browsing or storage settings block writes.
      }

      return valueToStore;
    });
  };

  return [value, save];
}
