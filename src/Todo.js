import React from 'react'

const Todo=({text,key}) =>{
    return(
        <div className="todo-container">
            <h3 className="todoText" id="key">{text}</h3>
            <button className="fa fa-close"></button>
            <button className="fa fa-trash"></button>
        </div>  
    )
}

export default Todo