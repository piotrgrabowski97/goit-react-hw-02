import { useState, useEffect } from "react";
import Feedback from "./Feedback";
import Options from "./Options";
import Notification from "./Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
  const savedFeedback = localStorage.getItem("feedback");
  return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
});

const updateFeedback = (type) => {
  setFeedback((prevFeedback) => {
    const updatedFeedback = {
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    };
    localStorage.setItem("feedback", JSON.stringify(updatedFeedback));
    return updatedFeedback;
  });
};
  
  const resetFeedback = () => {
  setFeedback({
    good: 0,
    neutral: 0,
    bad: 0,
  });
};

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 ? ((feedback.good / totalFeedback) * 100).toFixed(2) : 0;


useEffect(() => {
  localStorage.setItem("feedback", JSON.stringify(feedback));
}, [feedback]);

return (
  <div>
    <h1>Sip Happens Café</h1>
    <p>Please leave your feedback about our service by selecting one of the options below.</p>

    <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
    
    {totalFeedback > 0 ? (
      <>
        <Feedback feedback={feedback} />
        <Notification totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      </>
    ) : (
      <Notification message="No feedback yet. Please leave your feedback!" />
    )}
  </div>
);
}

export default App;
