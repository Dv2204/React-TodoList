import React from 'react'
import TodoItem from './TodoItem'
const Todos = (props) => {
  return (
    <div>
      {props.todos.length === 0 ? "No Todos To display" :
        props.todos.map((i) => {
          return <TodoItem key={i.id} todo={i} onDelete={props.onDelete} />
        })}

    </div>
  )
}

export default Todos
