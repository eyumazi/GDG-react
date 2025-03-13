import { useMemo, useCallback } from "react";
import useCharacterCount from "../hooks/useCharacterCount";

const CHARACTER_LIMIT = 100;

export const CharacterCount = () => {
  const { text, count, setText } = useCharacterCount();

  const handleTyping = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  const characterCount = useMemo(() => count, [count]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  }, [text]);

  const progressBarWidth = useMemo(() => {
    return (characterCount / CHARACTER_LIMIT) * 100;
  }, [characterCount]);

  const isWarning = useMemo(() => {
    return progressBarWidth >= 90;
  }, [progressBarWidth]);

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      marginBottom: "20px",
      boxSizing: "border-box",
      transition: "border-color 0.3s, box-shadow 0.3s",
    },
    textareaFocus: {
      borderColor: "#007bff",
      boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
    },
    progressBarContainer: {
      width: "100%",
      backgroundColor: "#f3f3f3",
      borderRadius: "5px",
      overflow: "hidden",
      marginBottom: "10px",
    },
    progressBar: {
      height: "10px",
      backgroundColor: isWarning ? "red" : "green",
      width: `${progressBarWidth}%`,
      transition: "width 0.3s",
    },
    warning: {
      color: "red",
      marginBottom: "10px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#007bff",
      color: "#fff",
      cursor: "pointer",
      transition: "background-color 0.3s, box-shadow 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
      boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Character Count</h1>
      <textarea
        cols="40"
        rows="20"
        value={text}
        onChange={handleTyping}
        style={styles.textarea}
        maxLength={CHARACTER_LIMIT}
        onFocus={(e) => {
          e.target.style.borderColor = styles.textareaFocus.borderColor;
          e.target.style.boxShadow = styles.textareaFocus.boxShadow;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "";
          e.target.style.boxShadow = "";
        }}
      ></textarea>
      <div style={styles.progressBarContainer}>
        <div style={styles.progressBar}></div>
      </div>
      {isWarning && (
        <p style={styles.warning}>You are nearing the character limit!</p>
      )}
      <p>
        Character Count: {characterCount}/{CHARACTER_LIMIT}
      </p>
      <button
        onClick={handleCopy}
        style={styles.button}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
          e.target.style.boxShadow = styles.buttonHover.boxShadow;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = styles.button.backgroundColor;
          e.target.style.boxShadow = "";
        }}
      >
        Copy to Clipboard
      </button>
    </div>
  );
};
