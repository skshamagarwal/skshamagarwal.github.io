import { useState, useEffect, useRef } from 'react';

const useTypewriter = (text, speed = 50, onComplete) => {
  const [displayText, setDisplayText] = useState('');
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setDisplayText('');
    if (!text) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        i++;
        setDisplayText(text.slice(0, i));
      } else {
        clearInterval(typingInterval);
        onCompleteRef.current && onCompleteRef.current();
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

export default useTypewriter;