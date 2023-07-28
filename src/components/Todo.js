import { useState } from "react"

function Todo(props){
    const {todo,completeTodo,editTodoText,deleteTodo} = props
    console.log(todo)
    const [showInput,setshowInput] = useState(false)

    return(
        <>
        <li onClick={()=>setshowInput(!showInput)}>{todo.text}</li>
        <input type="text" onKeyDown={(e)=>e.key === 'Enter' && editTodoText(todo.id,e) && setshowInput(false)
         }
        
            style={{display: showInput? 'block':'none'}}        
        />
        <label>
            Complete
            <input type="checkbox" checked ={todo.completed}
            
                onChange={()=> completeTodo(todo.id)}
            />
        </label>
        <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
        </>
    )
}

export default Todo