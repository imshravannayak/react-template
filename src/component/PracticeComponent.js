import { useState } from "react";
const PracticeComponent = ()=>{
    const [counter, setCounter] = useState(0);
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const addButton=()=>{
        setCounter(counter+1);
    }
    const minusButton = ()=>{
        setCounter(counter-1);
    }
    const addTask = ()=>{
        console.log(task)
        setTasks([...tasks, task])
        console.log(tasks)
    }
    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index); // Remove the task at the specified index
        setTasks(newTasks); // Update the tasks state
      };
    return (
        <div className="container">
       <div className="row">
        <button onClick={addButton}>+</button>
        <p>{counter}</p>
        <button onClick={minusButton}>-</button>
       </div>
       <div className="container-fluid">
        <input type="text" onChange={(e)=>setTask(e.target.value) }></input>
        <button onClick={addTask}>Add task</button>
        <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            {/* <button onClick={() => deleteTask(index)}>Delete</button> */}
          </li>
        ))}
      </ul>
        </div>
       </div>

    )

}
export default PracticeComponent;