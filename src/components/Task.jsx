import React from "react"
import {useState} from "react"
import checkmark from '../assets/greencheck.png'
import './App.css'

/* return a div that acts as a form upon click. When clicked, user is presented with a form that let's them input things like the name of the task,
// when due, as well as urgency? Upon submission, the form becomes transparent again and reverts the values back to empty for the next submission.

*/
const Task = (props) => {
  
  const [task, setTask] = useState('hello')
  const [check, setCheck] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handleHover = (e) => {
    setHovered(true)
    console.log(e.target)
  }

  const handleLeave = (e) => {
    setHovered(false)
    console.log(e.target)
  }

  const handleTaskClick = () => {
    console.log()
  }

  const checkClick = () => {
    setCheck(!check)
  }
  
  const handleSubmit = () => {
    console.log()
  }

  return(
    <div>
      <div className={hovered ? 'boxHovered taskBox': 'taskBox'} onClick={handleTaskClick} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <div className="checkBox" onClick={checkClick}>{check && <img src={checkmark} width="15px"/>}</div>
        <div className="taskDescription">{task}</div>
      </div>

    <form className="taskForm" onSubmit={handleSubmit}>
    </form>
    </div>
  )
}

export default Task;