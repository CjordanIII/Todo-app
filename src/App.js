import {useState,useEffect} from 'react'
import TodosList from './components/TodosList';


import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    const saveTodos = localStorage.getItem('todos')
    if(saveTodos){
      setTodos(JSON.parse(saveTodos))
    }
  }
  
  ,[])

  const addTodo = (e)=>{
    const newTodo = {
      id: new Date(),
      text: e.target.value,
      completed: false
    }


    setTodos([...todos,newTodo])
    e.target.value = ''
    localStorage.setItem('todos',JSON.stringify([...todos, newTodo]))
  }




  // complete todo
  const completeTodo = (id) =>{
    const todosCoppy = [...todos]
    const indexOfTodo = todosCoppy.findIndex(item => item.id === id)
    // todosCoppy[2].completed = !todoCoppy[2].completed
    todosCoppy[indexOfTodo].completed = !todosCoppy[indexOfTodo].completed
    setTodos([...todosCoppy])
    localStorage.setItem('todos',JSON.stringify([...todosCoppy]))
  }


  const editTodoText = (id,e)=>{
    const todosCoppy = [...todos]
    const indexOfTodo = todosCoppy.findIndex(item => item.id === id)
    todosCoppy[indexOfTodo].text = e.target.value
    setTodos([...todosCoppy])
    e.target.value = ' '
    localStorage.setItem('todos',JSON.stringify([...todosCoppy]))
  }

  const deleteTodo = (id)=>{
    const todosCoppy = [...todos]
    const indexOfTodo = todosCoppy.findIndex( item=> item.id === id)
    todosCoppy.splice(indexOfTodo,1)
    setTodos([...todosCoppy])
    localStorage.setItem('todos',JSON.stringify([...todosCoppy]))
  }

  return (
    <div className="App">
      <h1>Todo's app</h1>
     
      <TodosList todos = {todos} addTodo = {addTodo}
      
      completeTodo = {completeTodo} editTodoText ={editTodoText}
      deleteTodo={deleteTodo}
      
      />

    </div>
  );
}

export default App;
