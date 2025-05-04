import { useEffect, useState } from "react";

export default function Option({ letter, option, answer }) {
  const [ans, setAns] = useState(null);
  const [color, setColor] = useState();

  useEffect(() => {
    if (ans) {
      setColor("greenyellow");
    } else if(ans === false) {
      setColor("rgb(250, 85, 85)");
    }
  }, [ans]);

  return (
    <span
      onClick={() => {
        setAns(answer);
      }}
      style={{ backgroundColor: color }}
    >
      {letter + option}
    </span>
  );
}
