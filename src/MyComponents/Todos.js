
import React from 'react';
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        props.todos.map((todo) => (
          <div key={todo.sno}>
            <Todoitem todo={todo} onDelete={props.onDelete} />
            <hr />
          </div>
        ))
      )}
    </div>
  );
};
