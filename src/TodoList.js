<<<<<<< HEAD
import React from 'react'
import Todo from './Todo'

function TodoList({addtodo,setaddtodo}) {
    
    return (
        <div className="todo-list">
            <div>
                <ul> 
                    {addtodo.map(todo=>(
                        <Todo 
                            setaddtodo={setaddtodo} 
                            addtodo={addtodo} 
                            text={todo.text} 
                            key={todo.key} 
                            todo={todo}
                        />
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
=======
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
>>>>>>> ce17e28a5eebfaacb06a4845adad7e91aa057fb8
