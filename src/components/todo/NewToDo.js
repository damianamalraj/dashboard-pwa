import React, { useState } from 'react'
import style from './newtodo.module.css'


const NewToDo = (props) => {
    const [todo, setTodo] = useState({title: "", desc: ""})
    const {title, desc} = todo;

    const handleSubmit = (event) => {
        props.addTodo(todo)
        event.preventDefault()
        setTodo({title:"", desc: ""})
    }

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo, [name]: event.target.value}
        })
    }
  return (
  
     <form className={style.form} onSubmit={handleSubmit}>
         <div className={style['form-field']}>
             <label htmlFor="">Title: </label>
             <input value={title} onChange={handleChange} type="text" name="title" id="title" />
         </div>
         <div className={style['form-field']}>
             <label htmlFor="desc">Desc: </label>
             <textarea value={desc} onChange={handleChange} type="text" name="desc" id="desc" />
         </div>
         <button type='submit'>Add todo </button>
     </form>

  )
}

export default NewToDo
