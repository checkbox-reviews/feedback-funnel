import FeedbackBox from "../components/FeedbackBox";
import StarRating from "../components/StarRating";
import { useState } from "react";
import styles from "../styles/FeedbackFunnel.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackFunnel() {
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const onFeedbackSubmit = (feedbackVal, recommendationVal) => {
    setFeedback(feedbackVal);
    setRecommendation(recommendationVal);
    setStep(2);
  };

  const onRate = (ratingVal) => {
    setRating(ratingVal);
    setStep(3);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Company Logo" width={150} height={40} />
      </div>
      <div className={styles.contentContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {step === 1 && (
              <div>
                <p className={styles.introText}>
                  We value your feedback. Please share your experience and let
                  us know how we can improve.
                </p>
                <p className={styles.stepIndicator}>
                  Step 1: Share your experience
                </p>
                <FeedbackBox onSubmit={onFeedbackSubmit} />
              </div>
            )}
            {step === 2 && (
              <div>
                <p className={styles.stepIndicator}>Step 2: Rate our service</p>
                <StarRating onRate={onRate} />
              </div>
            )}
            {step === 3 &&
              (rating < 4 ? (
                <div>Thank you for your feedback. We will be in touch.</div>
              ) : (
                <div>
                  <p>Thank you for the positive feedback!</p>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Leave a review on our Google Store
                  </a>
                  <span> or </span>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook Page
                  </a>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FeedbackFunnel;
