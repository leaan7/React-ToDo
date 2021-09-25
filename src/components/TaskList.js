import React, { useContext } from 'react';

import { TaskContext } from '../context/TaskContext'

import './TaskList.css';

function TaskList() {
  
  const [tasks, setTask] = useContext(TaskContext)

  // Take all tasks, and remove, and save
  function deleteTask(index) {
    const tasksAtt = tasks.filter(i => i.id !== index)
    setTask(tasksAtt)
  }

  // Check Task
  function checkButton(task) {
    const checkingTask = tasks.map(i => {
      if(i.id === task.id ) {
        i.done = !task.done
      } 
      return i
    })

    setTask(checkingTask)
  }


  return (
    <div className="taskList-Container">
      {tasks.map((task, index) => <li key={task.id} className={"task"}><span className={task.done ? 'donned' : ''}>{task.name}</span><div><button onClick={() => {checkButton(task)}} className="btn-check"><img alt='Done/Undone' src={task.done === false ? './undone.png' : './done.png'}/></button><button className="btn-remove" onClick={() => {deleteTask(task.id)}}><img alt="remove" src="./remove.png" /></button></div></li>)}
    </div>);
}

export default TaskList;