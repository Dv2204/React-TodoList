import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos"
import AddTodo from "./MyComponents/AddTodo"
import AboutComp from "./MyComponents/About"
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Deleted", todo.title)
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }

  const addTodo = (title, desc) => {
    const myTodo = {
      id: todos.length + 1,
      title: title,
      description: desc
    }
    console.log(myTodo)
    setTodos([...todos, myTodo])
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title = 'DV ki TodoList'/>
        <Routes>
        <Route exact path = '/about' element={<AboutComp />} />
        <Route exact path='/' element={<>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
