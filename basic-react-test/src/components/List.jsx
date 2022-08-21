import React, { useState, useEffect } from "react";

export default function List({ paramFunction }) {
  const [valueList, setValueList] = useState([]);

  useEffect(() => {
    setValueList(paramFunction);
    console.log('Updating counter form List component')
  }, [paramFunction]);

  return (
    <div>
      {valueList.map((item) => (
        <div key={item + Math.random(1, 999999)}>{item}</div>
      ))}
    </div>
  );
}
