import { useState, useEffect } from "react";

interface TypedTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const TypedText = ({
  text,
  className = "",
  speed = 50,
  delay = 0,
}: TypedTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Initial delay before starting the typing animation
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    if (isTyping && currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
    }

    return () => {
      clearTimeout(timeout);
      clearTimeout(startTimeout);
    };
  }, [text, currentIndex, speed, delay, isTyping]);

  return <span className={className}>{displayedText}</span>;
};

export default TypedText;
