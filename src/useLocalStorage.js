import { useEffect, useState } from "react";

function getValueStorage(key, initialState) {
  const saveValue = JSON.parse(localStorage.getItem(key));
  if (saveValue) {
    return saveValue;
  }

  if (initialState instanceof Function) {
    return initialState();
  }

  return initialState;
}

export function useLocalStorage(key) {
  const [value, setValue] = useState(() => getValueStorage(key, null));

  useEffect(() => {
    if (value !== null) localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  function setItem(newValue) {
	setValue(newValue);
  }

  function removeItem() {
	setValue(null);
	localStorage.removeItem(key);
  }

  return [value, {setItem, removeItem}];
}
