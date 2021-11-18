import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from './contexts/ThemeContext';
import { TodosContext } from './contexts/TodoContext';

const TodoForm = () => {
    const { addTodo } = useContext(TodosContext)
    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme;
    const [title, setTitle] = useState('')
    const onTitle = event => {
        setTitle(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        addTodo({ id: uuidv4(), title })
        setTitle('')
    }
    const styles = isLightTheme ? light : dark;
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Add new title" onChange={onTitle} value={title} required />
            <input type="submit" value="Add" style={styles} />
        </form>
    )
}

export default TodoForm
