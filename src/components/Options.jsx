import styles from "./Options.module.css";
import PropTypes from "prop-types";

function Options({ updateFeedback, totalFeedback, resetFeedback }) {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.button} onClick={() => updateFeedback("good")}>Good</button>
      <button className={styles.button} onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={styles.button} onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button className={`${styles.button} ${styles.resetButton}`} onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
}

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};

export default Options;
