import styles from "./Notification.module.css";
import PropTypes from "prop-types";

function Notification({ message, totalFeedback, positiveFeedback }) {
  return (
    <div className={styles.notification}>
      {message ? (
        <p>{message}</p>
      ) : (
          <>
            <p>Total Feedback: {totalFeedback}</p>
            <p>Positive Feedback: {positiveFeedback}%</p>
          </>
      )}
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
  totalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.string,
};

export default Notification;
