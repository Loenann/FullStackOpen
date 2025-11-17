import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Stats = ({text, value}) => {
  if(text === "positive"){
    return <p>{text}: {value}%</p>
  } else {
    return <p>{text}: {value}</p>
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalClick, setTotalClick] = useState(0)
  const [totalPoint, setTotalPoint] = useState(0)

  const goodReview = () => {
    setGood(good + 1)
    setTotalClick(totalClick + 1)
    setTotalPoint(totalPoint + 1)
  }

  const neutralReview = () => {
    setNeutral(neutral + 1)
    setTotalClick(totalClick + 1)
  }
  const badReview = () => {
    setBad(bad + 1)
    setTotalClick(totalClick + 1)
    setTotalPoint(totalPoint - 1)
  }

  const average = totalClick === 0 ? 0 : totalPoint / totalClick
  const positive = totalClick === 0 ? 0 : (good / totalClick) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodReview} text='good'/>
      <Button onClick={neutralReview} text='neutral'/>
      <Button onClick={badReview} text='bad'/>

      <h1>Statistics</h1>

      {totalClick === 0? (
        <p>No feedback given</p>
      ): (
        <>
          <Stats text='good' value={good}/>
          <Stats text='neutral' value={neutral}/>
          <Stats text='bad' value={bad}/>
          <Stats text='all' value={totalClick}/>
          <Stats text='average' value={average}/>
          <Stats text='positive' value={positive}/>
        </>
      )}
    </div>
  )
}

export default App