import styles from "./Feedback.module.css";
import PropTypes from "prop-types";

function Feedback({ feedback }) {
  return (
    <div className={styles.feedbackContainer}>
      <h2>Feedback Statistics</h2>
      <p className={styles.feedbackItem}>Good: {feedback.good}</p>
      <p className={styles.feedbackItem}>Neutral: {feedback.neutral}</p>
      <p className={styles.feedbackItem}>Bad: {feedback.bad}</p>
    </div>
  );
}

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Feedback;
