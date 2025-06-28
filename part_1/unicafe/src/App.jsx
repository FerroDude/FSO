import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAverage(average + 1);
    setFeedbackGiven(true);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    setFeedbackGiven(true);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage(average - 1);
    setFeedbackGiven(true);
  };

  const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
  };

  const StatisticsLine = ({ text, value }) => {
    return (
      <p>
        {text}: {value}
      </p>
    );
  };

  const Statistics = ({ good, bad, neutral, total, average }) => {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="Total" value={total} />
        <StatisticsLine text="Average" value={average / total} />
        <StatisticsLine text="Positive" value={(good / total) * 100} />
      </div>
    );
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text={'Good'} />
      <Button handleClick={handleNeutral} text={'Neutral'} />
      <Button handleClick={handleBad} text={'Bad'} />

      {feedbackGiven ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          average={average}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
