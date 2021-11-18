import React, { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import { TodosContext } from './contexts/TodoContext'

const TodoItem = ({ todo }) => {
    const {deleteTodo} = useContext(TodosContext)
    const {theme} = useContext(ThemeContext)
    const {isLightTheme,light,dark} = theme;
    const style = isLightTheme ? light : dark;
    
    return (
        <li style={style} onClick={deleteTodo.bind(this,todo.id)}>{todo.title}</li>
    )
}

export default TodoItem
