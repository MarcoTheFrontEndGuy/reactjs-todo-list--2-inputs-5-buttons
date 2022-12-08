import React, { useState } from 'react'
import './todoApp-marco-css.css';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [todoId, setTodoId ] = useState(null);
  const [todoNewTask, setTodoNewTask] = useState("");
  const [isCompleted, setIsCompleted] = useState([]);


  const todoIdEdit = (id) => {
    setTodoId(id);
  }

  // const todoIdEdit = (id) => {
  //   setTodoId( todo.filter( (todo) => {
  //     if(todo.id === id) {
  //       return id;
  //     }
  //   }))
  // }


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

        console.log(todo.completed);
        } 
      
      return todo;

    }))
  
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
              // <h4 className='checked'>{todo.task}</h4>
              
              <h4 className={`checked ${todo.completed ? "line-through" : ""}`}>{todo.task}</h4>
              :
              <input type="text" onChange={(e) => setTodoNewTask(e.target.value)} value={todoNewTask} />
            }
              


              <div className='todo-item__buttons'>
              {todoId !== todo.id ? 
                <>
                  <input type="checkbox"  onChange={ () => toggleCompleted(todo.id)}  />
                  <button className='basic-button' onClick={() => todoIdEdit(todo.id) }> edit </button>
                  <button className='basic-button' onClick={ () => deleteTask(todo.id)} >delete</button>
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
