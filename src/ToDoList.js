import './App.css';
import { useState } from 'react'

function ToDoList() {
    
    const [newTask, setNewTask] = useState(
        ''
    )

    const [list, setList] = useState([])

    const addTask = (e) => {
        e.preventDefault();
        setList([
            ...list, newTask
        ])
        console.log('add task method reached')
    }

    return(
        <div>
        <h2>To Do List App</h2>
        <form onSubmit={addTask}>
            <input
                name='task' type='text' placeholder='add a task' onChange={(e) => setNewTask(e.target.value)}
            ></input>
            <input type='submit'></input>
        </form>
        <ul>
        {list.map( (task, index) => {
            return (
                <li key={index}>{task}</li>
            )
        })}
        </ul>
        </div>
    )
}

export default ToDoList;