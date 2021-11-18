import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    //states
    const [theme, setTheme] = useState({
        isLightTheme: false,
        light: {
            background: 'rgb(240,240,240)',
            color: 'black',
        },
        dark: {
            background: 'rgb(39,39,39)',
            color: 'white',
        }
    })
    //function toggled theme
    const toggleTheme = () => {
        setTheme({...theme,isLightTheme: !theme.isLightTheme})
    }
    //contexts data
    const themeContextData = {
        theme,toggleTheme
    }
    //return provider 
    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    )

}
export default ThemeContextProvider
