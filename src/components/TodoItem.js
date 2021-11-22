import React, { useContext } from 'react'
import { DELETE_TODO } from '../reducers/Types'
import { ThemeContext } from './contexts/ThemeContext'
import { TodosContext } from './contexts/TodoContext'

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodosContext)
    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;

    return (
        <li style={style} onClick={() => {
            dispatch({
                type: DELETE_TODO,
                payload:{
                    id: todo.id
                }
            })
        }} >{todo.title}</li>
    )
}

export default TodoItem
