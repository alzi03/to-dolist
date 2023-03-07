import React from "react";
import { useState } from "react"
import Task from "./Task";
import './App.css'

const tasks = [
  <Task />,
  <Task />,
  <Task />,
  <Task />,
  <Task />,
  <Task />,
  <Task />,
  <Task />,
  <Task />,
  <Task />
]

const List = () => {
  return(
    <div>
      <h1 className="header">
        TO-DO
      </h1>
      <div className="taskList">
        {tasks}
      </div>
    </div>
  )
}

export default List;
