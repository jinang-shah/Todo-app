//import './App.css';
import './todoapp.css'
import React,{useState} from "react";
import TodoList from './TodoList';

function App() {

  const [inputtext,setinput]=useState('');
  const [addtodo,setaddtodo]=useState([]);

  const inputChangeHandler=(e)=>{
       setinput(e.target.value)
  };

   const onClickHandler=(e)=>{
     e.preventDefault()
     setaddtodo([...addtodo,{text:inputtext , completed:false, key:Math.random()*100}])
     setinput('');
   };

  return (
    <div className="main-div">
          <h1 className="titletodo">Todo App</h1>
          <div className="inputText">
             <input type="text" value={inputtext} className="todoinput" onChange={inputChangeHandler}  />
             <button type="submit" className="btn btn-default" onClick={onClickHandler}  > Add</button>
          </div>
          <div>
            <TodoList addtodo={addtodo} />
          </div>
    </div>
  );
}

export default App;
