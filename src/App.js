import React, { useState } from 'react'
import './App.css';


export default function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completed, setCompleted] = useState([]); 

  const [todoEditing, setTodoEditing] = useState(null);   //get the todo id on click to edit
  const [editingText, setEditingText] = useState("");     //get the new text to edit the todo item

  const createTask = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      task: newTask,
      completed: false,
    }

    if(newTodo.task === "") {
      alert("Please type a task");
    }else{
      setTodo([...todo, newTodo]);
      setNewTask("");
    }


  }

  const deleteTask = (id) => {
    setTodo((todo.filter((todo) => todo.id !== id)));
  }

  const toggleComplete = (id) => {
      setTodo( (todo.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })));
  }

  const editTodo = (id) => {
    setTodo( (todo.map( (todo) => {
        if(todo.id === id) {
            todo.task = editingText;
        }
        return todo
    })));

    setTodoEditing(null);
    setEditingText("");
  }


  return (
    <div className='App'>
      <h1>Todo App - React JS - useState - Marco</h1>
      <hr />
      
      <form onSubmit={addTask}>
        <input type="text" onChange={ (e) => createTask(e)} value={newTask} />
        <button type="submit">addTask</button>
      </form>

      {todo.map((todo) => <div key={todo.id} className='task-row'>

        {todoEditing === todo.id ?
            <input 
                type="text" 
                onChange={ (e) => setEditingText(e.target.value) } 
                value={editingText} 
            />
            : 
            <h3>{todo.task}</h3>
        }
          <input onClick={ () => toggleComplete(todo.id) } type="checkbox" />


          <button onClick={() => deleteTask(todo.id)} >delete</button>

          {todoEditing === todo.id ? <button onClick={ () => editTodo(todo.id)}>Submit Edits</button>
          :<button onClick={ () => setTodoEditing(todo.id) }>edit Todo</button>

          }

        </div>)}
    </div>
  )

 
      

  
}
