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
    if(inputtext !== '' ){
      e.preventDefault()
      setaddtodo([...addtodo,{text:inputtext , completed:false, key:Math.random()*100}])
      setinput('');
    }
    else{
      alert('Add item to list')
    }
   };

  return (
    <div className="main-div">
      <div className="logo">
         <h1 className="logo-text"> Jinang Shah</h1>
      </div>
          <h1 className="titletodo">ToDo App</h1>
          <div className="inputText">
             <input  type="text" value={inputtext} className="todoinput" onChange={inputChangeHandler}  />
             <button type="submit" className="inputbtn" onClick={onClickHandler}  > Add</button>
          </div>
          <div>
            <TodoList setaddtodo={setaddtodo} addtodo={addtodo} />
          </div>
    </div>
  );
}

export default App;
