import { useState } from "react"


const ToDoList = () => {
    const [task, setTask] = useState('')
    const [todos, setTodos] = useState([])

    const addTodos = () => {
        if (task.trim() === "") return;
        setTodos([...todos, task])
        setTask("")
    }
    return (
        <div>
            <input className='bg-blue-100 text-black' type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTodos}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}  <button>❌</button> </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList