import { useState } from 'react'

const StatisticLine = ({text,value}) =>  <div>{text} {value}</div>



const Statistics = (props) =>{
    const good = props.good
    const bad = props.bad
    const neutral = props.neutral
    const total = good + bad + neutral
    if (total === 0){
            return( 
                <div> No feedback given</div>
               
            )
        }
    return(    
        <div>
          <table> 
            
            <tr>  
              <td> <StatisticLine text='good' value={good} /></td></tr>
            <tr>  
              <td><StatisticLine text='neutral' value={neutral}  /></td></tr>
            <tr>  
              <td><StatisticLine text='bad' value={bad} /></td></tr>
            <tr>  
              <td>average {(good - bad)/total} <br/></td></tr>
            <tr>  
              <td>positive {100*good/total} %</td></tr>
          </table>
        </div>
    )
}

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
  
  const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
  
    const handleGoodClick = () => {
     
      setGood(good + 1)
    }
  
    const handleNeutralClick = () => {
      
      setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        
        setBad(bad + 1)
      }
  
    return (
       
      <div>
        <h1>give feedback</h1>
        
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />

        <h2>statistics</h2>
        
        <Statistics good={good} bad={bad} neutral={neutral}/>
      </div>
    )
  }

  export default App