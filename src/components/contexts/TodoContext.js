import React, { createContext, useState } from 'react'

export const TodosContext = createContext()

const TodosContextProvider = ({children}) => {
    //states
    const [todos, setTodo] = useState([
        { id: 1, title: 'viec 1' },
        { id: 2, title: 'viec 2' },
        { id: 3, title: 'viec 3' }
    ])
    const addTodo = todo => {
        setTodo([...todos, todo])
    }
    const deleteTodo = id => {
        setTodo(todos.filter(todo => todo.id !== id))
    }
    const todoContextData = {
        todos, addTodo, deleteTodo
    }
    return (
        <TodosContext.Provider value={todoContextData}>
            {children}
        </TodosContext.Provider>
    )
}
export default TodosContextProvider
