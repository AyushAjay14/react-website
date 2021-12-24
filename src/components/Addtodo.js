import React , { useState } from "react";

function Addtodo(props) {

    const addTodo = () => {
        props.addTodo(todo , desc)
    }
    const [todo, setTodo] = useState("")
    const [desc, setDesc] = useState("")
  return (
    <div className="container" style= {{width : "50%"}}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className={`form-label text-${props.mode==="dark"? "white": "dark"}`}>
          TODO
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Add your Todo Here"
          style = {{height : "60px"}}
          value={todo}
          onChange={(e) =>{return setTodo(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==="dark"? "white": "dark"}`}>
          DESCRIPTION
        </label>
        <textarea
          placeholder="Add your Description Here"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
          value={desc}
          onChange={(e) =>{return setDesc(e.target.value)}}
        ></textarea>
      </div>
      <button type="button" className="btn btn-success" onClick={addTodo}>ADD TODO</button>
      <button type="button" onClick={props.clearAll} className="btn btn-success mx-3">Clear All</button>
    </div>
  );
}

export default Addtodo;
