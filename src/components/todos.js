import React from 'react'
import Todoitem from './Todoitem'
const Todos = (props) => {
    return (
        <div style={{textAlign : "center" , alignItems : "center" , width : "99%" , marginTop : "25px"}}>
        {props.todos.map((todo) =>{
            return <Todoitem style= {{display : "inline-block"}} key = {todo.sno} todos = {todo} onDelete={props.onDelete} logo={props.logo} / >
        })}
    </div>
    )
}

export default Todos
