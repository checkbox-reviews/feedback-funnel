// components/FeedbackBox.tsx

import { useState } from "react";
import styles from "../styles/FeedbackFunnel.module.css";

const FeedbackBox = ({ onSubmit }) => {
  const [localFeedback, setLocalFeedback] = useState("");
  const [localRecommendation, setLocalRecommendation] = useState("");

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        placeholder="Share your experience..."
        value={localFeedback}
        onChange={(e) => setLocalFeedback(e.target.value)}
      />
      <textarea
        className={styles.textarea}
        placeholder="Any Recommendations?"
        value={localRecommendation}
        onChange={(e) => setLocalRecommendation(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={() => onSubmit(localFeedback, localRecommendation)}
      >
        Next
      </button>
    </div>
  );
};

export default FeedbackBox;
