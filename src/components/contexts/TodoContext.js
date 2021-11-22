import React, { createContext, useEffect, useReducer } from 'react'
import { todoReducer } from '../../reducers/TodoReducer'
import { GET_TODOS, SAVE_TODOS } from '../../reducers/Types'

export const TodosContext = createContext()

const TodosContextProvider = ({ children }) => {
    //states
    //const [todos, setTodo] = useState([])
    const [todos, dispatch ] = useReducer(todoReducer,[])
    //useeffects
    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload:null
        })
     },[])

    useEffect(() => {
        dispatch({
            type: SAVE_TODOS,
            payload: {todos}
        })
    }, [todos])


    // const addTodo = todo => {
    //     setTodo([...todos, todo])
    // }
    // const deleteTodo = id => {
    //     setTodo(todos.filter(todo => todo.id !== id))
    // }
    const todoContextData = {
        todos, dispatch
    }
    return (
        <TodosContext.Provider value={todoContextData}>
            {children}
        </TodosContext.Provider>
    )
}
export default TodosContextProvider
