import React, { useContext } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { TodosContext } from './contexts/TodoContext';
import { AuthContext } from './contexts/AuthContext';

const Todos = () => {
    const { todos } = useContext(TodosContext)
    const { isAuthenticated } = useContext(AuthContext)
    return (
        <div className="todo-list">
            <TodoForm />
            {isAuthenticated ?
                (<ul>
                    {todos.map(todo => {
                        return (<TodoItem todo={todo} key={todo.id} />)
                    })}
                </ul>)
                :
                (<p style={{textAlign: 'center'}}>not authorised</p>)
            }

        </div>
    )
}

export default Todos