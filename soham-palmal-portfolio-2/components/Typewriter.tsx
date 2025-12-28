import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 15, delay = 0, className = '', cursor = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setStarted(false);
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [text, delay]);

  useEffect(() => {
    if (!started) return;

    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, started, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && displayedText.length < text.length && <span className="animate-pulse font-bold ml-px">|</span>}
    </span>
  );
};

export default Typewriter;