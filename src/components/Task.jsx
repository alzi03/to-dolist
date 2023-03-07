import React from "react"
import {useState} from "react"
import checkmark from '../assets/greencheck.png'
import './App.css'

/* return a div that acts as a form upon click. When clicked, user is presented with a form that let's them input things like the name of the task,
// when due, as well as urgency? Upon submission, the form becomes transparent again and reverts the values back to empty for the next submission.

*/
const Task = (props) => {
  
  const [task, setTask] = useState('')
  const [check, setCheck] = useState(false)
  const [hovered, setHovered] = useState(false)


  const checkClick = () => {
    setCheck(!check)
  }

  const handleTaskChange = (e) => {
    setTask(e.target.value)
    console.log(task)
  }
  

  return(
    <div>
      <div className={hovered ? 'boxHovered taskBox': 'taskBox'} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className={check ? 'green checkBox' : 'checkBox'} onClick={checkClick}></div>
        <input className="taskDescription" value={task} onChange={handleTaskChange}></input>
      </div>
    </div>
  )
}

export default Task;