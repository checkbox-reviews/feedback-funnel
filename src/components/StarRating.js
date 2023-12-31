import styles from "../styles/FeedbackFunnel.module.css";
import { useState } from "react";

function StarRating({ onRate }) {
  const [localRating, setLocalRating] = useState(0); // Rename to localRating to avoid confusion

  const handleRate = (value) => {
    setLocalRating(value);
    onRate(value);
  };

  return (
    <div className={styles.starContainer}>
      <div className={styles.starsRow}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`${styles.star} ${i < localRating ? styles.starActive : ""}`}
            onClick={() => handleRate(i + 1)}
          >
            {i < localRating ? "★" : "☆"}
          </span>
        ))}
      </div>

    </div>
  );
}

export default StarRating;
