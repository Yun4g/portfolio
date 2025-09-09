import { useEffect, useState } from "react";

export const useTypingEffect = (texts: string[], speed: number = 100,pause: number = 2000): string => {
  const [index, setIndex] = useState(0); 
  const [subIndex, setSubIndex] = useState(0); 
  const [forward, setForward] = useState(true);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (index >= texts.length) return;

    const timeout = setTimeout(() => {
      if (forward) {    
        setSubIndex((prev) => prev + 1);
        if (subIndex === texts[index].length) {
          setForward(false);
          setTimeout(() => {}, pause);
        }
      } else {      
        setSubIndex((prev) => prev - 1);
        if (subIndex === 0) {
          setForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
      setDisplayed(texts[index].substring(0, subIndex));
    }, forward ? speed : speed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, texts, speed, pause]);

  return displayed;
};
