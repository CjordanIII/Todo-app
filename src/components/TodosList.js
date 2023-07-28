import Todo from "./Todo"

function TodosList(props){
    const {todos,addTodo,completeTodo,editTodoText,deleteTodo} =props
    console.log('from todo list',todos)
    return(
        <div>
            <h1>Create Todo</h1>
            <input type ="text"
                onKeyDown={(e)=> e.key === "Enter" && addTodo(e)}
            />
            {
                todos.length? (
                <>
                    <h2>todos Items</h2>

                    <ul>
                        {todos.filter(item=>!item.completed).map(item => <Todo key={item.id} todo ={item} completeTodo ={completeTodo} editTodoText={editTodoText} deleteTodo={deleteTodo}/>)}
                    </ul>
                    <h2> Completed Todos</h2>

                    <ul>
                        {
                            todos.filter(item=>item.completed).map((item)=> <Todo key={item.id} todo={item} completeTodo ={completeTodo} editTodoText={editTodoText} deleteTodo={deleteTodo}/>)
                        }
                    </ul>
                </>
                
                
                ): (<h2>No todos</h2>)
            }
        </div>
    )
}

export default TodosList