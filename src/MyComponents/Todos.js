import React from 'react'
import {Todoitem} from "./Todoitem";

export const Todos = (props) => {
  const myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  };
  return (
    
    <div className="container"> 
    <h3 className="my-3">Todos List</h3>
    {props.todos.length==0? "no todos to display":
    props.todos.map((todo)=>{
    return (
    <> 
    < Todoitem todo ={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
    </>
    )
    })
    }
    </div>
  )
  
}
