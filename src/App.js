import React, { useState } from "react";
import './App.css';
import Todo from "./component/Todo";

function App() {

  const [newToDo, setNewToDo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewSubmit = (event) => {
    event.preventDefault();
    const todoItem = {
      text: newToDo,
      complete: false
    }
    setTodos([...todos, todoItem]);
    setNewToDo("");
  }

  const toDoDelete = (idx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== idx;
    })
    setTodos(filteredTodos);
  }

  const toggleCheckbox = (idx) => {
    const updatedCheckbox = todos.map((todo, i) =>{
      if(idx === i){
        todo.complete = !todo.complete;
      }
      return todo;
    })
    setTodos(updatedCheckbox);
  }

  return (
    <div className="App">
      <form onSubmit={(event) => {
        handleNewSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewToDo(event.target.value);
        }} type="text" value={newToDo}></input>
        <div>
          <button>
            Add
          </button>
        </div>
      </form>
      <hr></hr>
      {
        todos.map((todo, idx) => {
          
          return (
            <Todo key={idx} todo={todo} toggleCheckbox={toggleCheckbox} idx={idx} toDoDelete={toDoDelete}/>
          )
        })
      }
    </div>
  );
}

export default App;
