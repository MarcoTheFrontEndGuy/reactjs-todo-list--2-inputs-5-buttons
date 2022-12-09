import React, { useState } from 'react'
import './todoApp-marco-css.css';
import './todoApp-mediaqueries-marco-css.css';

import { FaCheckSquare, FaTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";


export default function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [todoId, setTodoId ] = useState(null);
  const [todoNewTask, setTodoNewTask] = useState("");
  const [isCompleted, setIsCompleted] = useState([]);



  const todoIdEdit = (id) => {
    setTodoId(id);
  }


  const addTask = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      task: newTask,
      completed: false
    }
    if(todoId) {
      setTodoId(null);
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

  const inputValueEditNewTask = (e) => {
    setTodoNewTask(e.target.value);
    e.target.focus();
    console.log(e.target.value);
  } 

  
  const submitNewTask = (id) => {
    setTodo( (todo.map((todo) => {
      if(todo.id === id) {
        todo.task = todoNewTask;
        todo.completed = false;
      }
      return todo;
    })))

    setTodoId(null);
    setTodoNewTask(""); ///////////////////// this line is new today 09-12-2022

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
              {todoId !== todo.id ?              
                <h4 className={`checked ${todo.completed ? "line-through" : ""}`}>{todo.task}</h4>
              :
                // <input type="text" className="inputToEditTask" onChange={(e) => setTodoNewTask(e.target.value)} value={todoNewTask} />

                <input type="text" className="inputToEditTask" onChange={(e) => inputValueEditNewTask(e)} value={todoNewTask} />
              }
              
              <div className='todo-item__buttons'>
              {todoId !== todo.id ? 
                <>
                <label htmlFor={todo.id}>

                <FaCheckSquare className='buttonIcon'/>
                  <input type="checkbox"  className="inputCheckbox-hidden" id={todo.id} onChange={ () => toggleCompleted(todo.id)}  />
                </label>
                  <BsPencilSquare className='buttonIcon' onClick={() => todoIdEdit(todo.id) } /> 
                  <FaTrashAlt className='buttonIcon' onClick={ () => deleteTask(todo.id)}  />
                </>
                :
                <>
                <button className='basic-button' onClick={ () => submitNewTask(todo.id)} >submit edit</button>
                </>
              }
                
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
