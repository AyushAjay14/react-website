import React from "react";

export default function Todoitem(props) {
  return (
    <>
      <div className="card mx-3 my-3" style={{width: "14rem" , display : "inline-block" }} >
        <img src="props.logo" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.todos.todo}</h5>
          <p className="card-text">
            {props.todos.desc}
          </p>
          <button className="btn btn-danger" onClick={()=>{
              return props.onDelete(props.todos)
          }}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
