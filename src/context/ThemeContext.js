import React, {createContext} from "react";
import useTheme from "../Hooks/useTheme";

export const ThemeContext = createContext();

function ThemeProvider( {startTheme, children}){

    const {theme, setTheme} = useTheme(startTheme);

    return(
        <ThemeContext.Provider value={{setTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;