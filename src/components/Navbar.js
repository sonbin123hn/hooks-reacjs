import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { ThemeContext } from './contexts/ThemeContext';

const Navbar = () => {
    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme;
    const styles = isLightTheme ? light : dark;
    //authContextData
    const { isAuthenticated, toggledAuth } = useContext(AuthContext)
    return (
        <div className="navbar" style={styles} >
            <h1>My hooks App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    {isAuthenticated ? "you are loged in" : " "}
                    <button onClick={toggledAuth}>
                        {isAuthenticated ? "logout" : "login"}
                    </button>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;