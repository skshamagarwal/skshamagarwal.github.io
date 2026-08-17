import useTypewriter from "../hooks/useTypewriter";

const Typewriter = ({ text, speed, onComplete, className = "" }) => {
  const displayText = useTypewriter(text, speed, onComplete);
  const isDone = displayText.length === text.length;

  return (
    <p className={`typewriter ${className}`}>
      {displayText}
      <span className={`typewriter-cursor ${isDone ? "typewriter-cursor--done" : ""}`} />
    </p>
  );
};

export default Typewriter;
