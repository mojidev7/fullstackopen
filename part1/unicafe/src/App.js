import React, { useState } from 'react'

const StatisticLine  = ({text, value}) => {
  return ( 
    <tr>
      <th>{text}</th>
      <th>{value}</th>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  if ((good + bad + neutral) === 0) {
    return <p>No feedback given</p>
  }
  return (
    <table>
      <StatisticLine text="Good" value={good}></StatisticLine>
      <StatisticLine text="Bad" value={bad}></StatisticLine>
      <StatisticLine text="Neutral" value={neutral}></StatisticLine>
      <StatisticLine text="All" value={good + neutral + bad}></StatisticLine>
      <StatisticLine text="Average" value={(good - bad)/(good + neutral + bad)}></StatisticLine>
      <StatisticLine text="Positive" value={good/(good + neutral + bad)}></StatisticLine>

    </table>
  )
}

const Button = ({handleClick, children}) => {
  return <button onClick={handleClick}>{children}</button>;
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)
  return (
    <div>
      <h1>Give FeedBack</h1>
      <div>
        <Button handleClick={handleGood}>Good</Button>
        <Button handleClick={handleNeutral}>Neutral</Button>
        <Button handleClick={handleBad}>Bad</Button>
      </div>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}

export default App