import React, { useCallback, useState, useRef, useEffect } from "react";
import List from "../components/List";

export default function Main() {
  const [backgroundColor, setBackgroundColor] = useState("green");
  const [input, setInput] = useState();
  const [counter, setCounter] = useState(0);

  // useRef
  const prevCounter = useRef(0);
  const inputRef = useRef();

  const divTheme = {
    backgroundColor: backgroundColor,
    height: 500,
  };

  const handleBackground = () => {
    backgroundColor === "green"
      ? setBackgroundColor("blue")
      : setBackgroundColor("green");
    console.log(backgroundColor);
  };

  const handleCounter = () => {
    setCounter((count) => count + 1);
    console.log(counter);
  };

  const focus = () => {
    inputRef.current.focus();
  };

  const paramFunction = useCallback(() => {
    return [counter, counter + 5, counter + 10, counter + 15];
  }, [counter]);

  useEffect(() => {
    prevCounter.current = counter;
  }, [counter]);

  return (
    <div style={divTheme}>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleBackground}>Change Colors</button>
      <button onClick={handleCounter}> Increment </button>
      <button onClick={focus}>Focus</button>
      <div>
        the render counts = {counter} & it used to be = {prevCounter.current}
      </div>
      <List paramFunction={paramFunction} />
    </div>
  );
}
