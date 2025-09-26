import { useEffect, useState } from "react";

export function useTyping(
  texts: string[],
  speed = 150,
  pause = 1000 // pause before deleting
) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0); // current letter index
  const [textIndex, setTextIndex] = useState(0); // current text
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === currentText.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) {
          setDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length); // move to next text
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [index, deleting, textIndex, texts, speed, pause]);

  return displayedText;
}
