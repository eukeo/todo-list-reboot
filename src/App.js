import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ListForm from "./ListForm/ListForm";
import TodoList from "./TodoList/TodoList";
import NewDate from "./NewDate/NewDate";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (uText, uTime) => {
    setTodoList((prevTodoList) => {
      return [...prevTodoList, { text: uText, time: uTime }];
    });
  };

  return (
    <div className="App">
      <NewDate />
      <ListForm onAddTodo={addTodoHandler} />
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;

