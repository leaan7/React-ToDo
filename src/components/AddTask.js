import React, { useContext, useEffect, useState } from 'react';

import './AddTask.css';

import { TaskContext } from '../context/TaskContext'

function AddTask() {

    // Getting input data
    const [input, setInputData] = useState('')
    function handleChange(event) {
        setInputData(event.target.value)
    }

    // Setting tasks State
    const [tasks, setTask] = useContext(TaskContext)

    // Putting task on task list
    function addTask(event) {
        event.preventDefault()

        if (!input) {
            alert('Write your task')
        } else {
            setTask([...tasks, { id: (tasks.length + 1), name: input, done: false }])
            setInputData('')
        }
    }

    // LocalStorage
    useEffect(() => {
        let storageTasks = JSON.parse(localStorage.getItem('tasks'))
        if (storageTasks) {
            setTask(storageTasks)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
    //

    return (
        <div className="addTask-container">
            <form>
                <input onChange={handleChange} className="input-task" type="text" value={input} />
                <button onClick={addTask} className="btn-add">Add</button>
            </form>
        </div>
    )
}

export default AddTask;
