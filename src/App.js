import React, { useState } from 'react'
import './todoApp-marco-css.css';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");


  // const createTask = (e) => {
  //   if(e.target.value === "") {
  //   }
  // }
  const addTask = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      task: newTask,
      completed: false
    }

    if(newTask === "") {
      alert("Please type a task for this week");
    } else {
      setTodo([...todo, newTodo]);
      setNewTask("");
    }
  }

  const deleteTask = (id) => {
    setTodo( todo.filter((todo) => {
      return todo.id !== id;
    }))
    return todo;
  }


  const toggleCompleted = (id) => {
  
    setTodo( todo.map( (todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;

    }))
  
  }



  return (
    <div>
      <h1>React JS - Todo App - Marco from the scratch</h1>

      <div className='todo-app'>
        <h2>Todo App</h2>          
        <h4>Tasks for the week</h4>

        <form onSubmit={addTask}>
          <input className="input-task" type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask}  />

          <button className="button-input-task" type="submit">add task</button>

        </form>

        <div className='tasks-container'>

          {todo.map((todo) => (
            <div key={todo.id} className='todo-item'>
              <h4>{todo.task}</h4>
              <div className='todo-item__buttons'>
                <input type="checkbox"  onChange={ () => toggleCompleted(todo.id)}  />
                <button className='basic-button'>edit</button>
                <button className='basic-button' onClick={ () => deleteTask(todo.id)} >delete</button>
              </div>
            </div>
          ))}
        </div>

      </div>

            {/* const toggleCompleted = (id) => {
              
              setTodo((todo) => {
                if(todo.id === id) {
                  todo.completed = !todo.completed;
                }
                return todo
              })
            
            } */}


    </div>
  )
}
