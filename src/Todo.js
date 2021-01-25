<<<<<<< HEAD
import React from 'react'

const Todo=({addtodo,setaddtodo,todo,text,key}) =>{

    const handleComplete=()=>{
        setaddtodo(addtodo.map((item)=>{
            if(item.key === todo.key){
                return {
                    ...item,completed:!item.completed,
                }   
            } 
            return item      
        }
          
        ));
    };

    const handleDelete=()=>{
        setaddtodo(addtodo.filter(el=>el.key !== todo.key));
    }

    return(
        <div className="todo-container">
            <h3 className={`todoText ${todo.completed? "completed" :""}`} id="key" >{text}</h3>
            <button className="btn btn-default" onClick={handleComplete} >Done</button>
            <button className="btn btn-default" onClick={handleDelete}>Delete</button>
        </div>  
    )
}

=======
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

>>>>>>> ce17e28a5eebfaacb06a4845adad7e91aa057fb8
export default Todo