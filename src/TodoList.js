import React from 'react'
import Todo from './Todo'

function TodoList({addtodo}) {
    
    return (
        <div className="todo-list">
            <div>
                <ul> 
                    {addtodo.map(todo=>(
                        <Todo text={todo.text} key={todo.key} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList




//
// function TodoList({addtodo}) {

//     const todolist= ()=>{

//     return (
//         <div className="todo-list">
//             <div>
//                 <ul> 
//                     <Todo />
//                 </ul>
//             </div>
//         </div>
//     )
//  }
// }

// export default TodoList
