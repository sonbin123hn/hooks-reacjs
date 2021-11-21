import React, { createContext, useEffect, useState } from 'react'

export const TodosContext = createContext()

const TodosContextProvider = ({ children }) => {
    //states
    const [todos, setTodo] = useState([
  
    ])
    //useeffects
    useEffect(() => {
        console.log('get')
        const todos = localStorage.getItem('todos')
        if (todos) setTodo(JSON.parse(todos))
     },[])

    useEffect(() => {
        console.log('set')
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


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
