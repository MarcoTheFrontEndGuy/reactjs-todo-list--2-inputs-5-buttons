import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,             
      completed: false,
    }

    setTodos([...todos, newTodo]);
    setTodo("");

  }


  function deleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }


  function toggleComplete(id) {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
        return todo
    });

    setTodos(updatedTodos);
    
  }


  return (
    <div className="App">
      <form onSubmit={ handleSubmit}>

        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />   {/*2 way data binding */} 
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo) => <div key={todo.id}>
          <div>{todo.text} </div>
          <button onClick={() => deleteTodo(todo.id) } >delete</button>
          <input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed} />
        </div> )}
    </div>
  );
}

export default App;
