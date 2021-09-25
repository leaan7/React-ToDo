import React, { useState, createContext } from 'react'

export const TaskContext = createContext()

export function TaskProvider(props) {
    const [tasks, setTask] = useState([{ id: 0, name: 'Drink Coffeeee !!', done: false }])

    return (
        <TaskContext.Provider value={[tasks, setTask]}>
            {props.children}
        </TaskContext.Provider>
    )
}