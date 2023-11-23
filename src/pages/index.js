import FeedbackBox from "../components/FeedbackBox";
import StarRating from "../components/StarRating";
import { useState } from "react";
import styles from "../styles/FeedbackFunnel.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackFunnel() {
  const placeId = 'ChIJZWb8Oq0SK4gREp-PBWlz6EQ';
  const googleReviewLink = `https://search.google.com/local/writereview?placeid=${placeId}`;
  const imageUrl = 'https://lh3.googleusercontent.com/p/AF1QipOzbTMt3UHukWpur5m0ZnlmJM8S_6DG4EnfHwg2=s680-w680-h510'

  const [step, setStep] = useState(1);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const onFeedbackSubmit = (feedbackVal) => {
    setFeedback(feedbackVal);
    setStep(2);
  };

  const onRate = (ratingVal) => {
    setRating(ratingVal);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/georgeview.jpeg" alt="Company Logo" width={300} height={100} />
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
                {/* <p className={styles.stepIndicator}>
                  Step 1: Rate our service
                </p> */}
                <StarRating onRate={onRate} />
                {/* <p className={styles.stepIndicator}>Step 2: Share your experience</p> */}
                <FeedbackBox onSubmit={onFeedbackSubmit} />
              </div>
            )}
            {step === 2 &&
              (rating < 4 ? (
                <div>Thank you for your feedback. We will be in touch.</div>
              ) : (
                <div>
                  <p className={styles.introText}> Thank you for the positive feedback!</p>

                  <a href={googleReviewLink} target="_blank" rel="noopener noreferrer" className={styles.reviewCard}>
                    <div className={styles.reviewInvitation}>
                      Please also review on Google! Every review helps!
                    </div>
                    <div className={styles.googleCard}>
                      <div className={styles.reviewHeader}>
                        <Image src={"/google.png"} alt="Google" width={40} height={40} />
                        <h2 className={styles.businessName}>Georgeview Restaurant</h2>
                      </div>
                      <Image src={imageUrl} alt="Business Image" width={484} height={246} layout='responsive' />
                      <div className={styles.reviewPrompt}>Leave a Review</div>
                    </div>
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
