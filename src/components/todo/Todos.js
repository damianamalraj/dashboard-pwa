import React from 'react'
import Todo from './Todo'
import style from './todos.module.css'

const Todos = (props) => {
  return (
    <section className={style.todos}>
        {
           props.todos.map((todo) => (
               <Todo onRemoveToDo = {props.onRemoveTodo} todo= {todo.todo} key={todo.id} id= {todo.id}/>
           ))
        }
      
    </section>
  )
}

export default Todos
