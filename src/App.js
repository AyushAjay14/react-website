import "./App.css";

import React, { useState } from "react";
// import Todoitem from "./components/Todoitem";
import logo from "./typeandlogo-08.jpg"
import Todos from "./components/todos";
import Navbar from "./components/navbar";
import Addtodo from "./components/Addtodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Textform from "./components/textForm";
function App() {
  const addTodo = (todo, desc) => {
    let newtodo = { sno: todos.length + 1, todo: todo, desc: desc };
    setTodos([...todos, newtodo]);
  };
  const [todos, setTodos] = useState([]);
  const onDelete = (todo) => {
    console.log("i am delete");
    // console.log("this is a todo " , todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(14 37 58)";
    }
  };
  

  const clearAll = () => {
    let newtodos = []
    if(todos.length===0){
      alert("There are no todo to be cleared");
    }
    else {
      setTodos(newtodos);
    }
  }
  return (
    <>
      <Router>
        <Navbar title="MY WEBSITE" mode={mode} toggleMode={toggleMode}  />

        <Routes>
            <Route path="/" activeClassName='active' element = { <>
                  <div className="Container ">
                    <h2 className={`text-center my-3 text-${mode === "dark" ? "white" : "dark"}`}>
                      TODOS LIST
                    </h2>
                    <Addtodo addTodo={addTodo} mode={mode} clearAll = {clearAll} />
                    {todos.length > 0 ? (
                      <Todos todos={todos} logo={logo} onDelete={onDelete} />
                    ) : (
                      <h3
                        className={`ms-5 my-4 text-${mode === "dark" ? "white" : "dark"
                          }`}
                      >
                        There are no todos left
                      </h3>
                    )}
                  </div>
                </> } />


            <Route path="about" activeClassName='active' element={ <Textform mode = {mode} / >} / >

        </Routes>
        
      </Router>
    </>
  );
}

export default App;
