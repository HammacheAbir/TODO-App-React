import React, {useState} from 'react';
import "./App.css"

function Todo({index,todo,CompleteTodo,DeleteTodo}){
  return(
    <div className="todo">
      {todo.text}
      <div>
        <button onClick={()=>CompleteTodo(index)}>
          {todo.isCompleted? 'complete' : 'incomplete'}
        </button>
        <button onClick={()=>DeleteTodo(index)}>
          X
        </button>
      </div>
    </div>
  )
} 

function TodoForm({addTodo}){
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue(''); 
  }

  const [value,setValue]=useState('');

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className='input' 
        type="text" 
        value={value} 
        onChange={e=>setValue(e.target.value)}
        placeholder="Nwe Todo !"
      />
    </form>
  )

}

function App(){

  const[todos,setTodos]= useState([
    {
      text : "Learn React",
      isCompleted : false
    },
    {
      text : "Meet Friends",
      isCompleted : false
    },
    {
      text : "Create App",
      isCompleted : false
    }
  ])

  const addTodo= text => {
    const newTodos =[...todos,{text}]
    setTodos(newTodos)
  } 

  const CompleteTodo=(index)=>{
    const newTodos= [...todos];
    newTodos[index].isCompleted=true;
    setTodos(newTodos);
  }

  const DeleteTodo=(index)=>{
    const newTodos= [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return(
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo,index)=>
          (<Todo  key ={index} index={index} todo={todo} CompleteTodo={CompleteTodo} DeleteTodo={DeleteTodo}/>)
        )}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )

 }

 export default App;