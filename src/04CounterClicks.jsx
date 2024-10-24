import { useState } from 'react'

const OtherStatistics = (props) =>{
  const {average, positive} = props

  return(
    <div>
        <p>average: {average}</p>
        <p>positive: {positive}</p>
    </div>
  )
}

const Statistics = (props) =>{ 
  const {value, text} = props
  return(
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Button = (props) =>{
  const {setToGood, setToNeutral, setToBad} = props
  return(
    <div>
      <button onClick={setToGood}>good</button>
      <button onClick={setToNeutral}>neutral</button>
      <button onClick={setToBad}>bad</button>
    </div>
  )
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)
  const average = allClicks > 0 ? (good - bad) / allClicks : 0
  const positive = allClicks > 0 ? (good / allClicks)*100 + '%': 'No feedback given'

  const setToGood = () => {
    setAllClicks(allClicks + 1)
    setGood(good + 1)
  }

  const setToNeutral = () => {
    setAllClicks(allClicks + 1)
    setNeutral(neutral + 1)
  }

  const setToBad = () => {
    setAllClicks(allClicks + 1)
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button setToGood={setToGood} setToNeutral={setToNeutral} setToBad={setToBad} />

      <h1>Statistics</h1>
      <Statistics value={good} text='good'/>
      <Statistics value={neutral} text='neutral'/>
      <Statistics value={bad} text='bad'/>
      <Statistics value={allClicks} text='all'/>

      <OtherStatistics average={average} positive={positive} />

    </div>
  )
}

export default App