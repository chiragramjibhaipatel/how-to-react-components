import { useState } from "react";

function useTheme(startTheme = "light"){
    const [theme, setTheme] = useState(startTheme)

    function validateTheme(themeValue){
        if(themeValue === "dark"){
            setTheme("dark")
        } else{
            setTheme("light")
        }
    }

    return {
        theme, 
        setTheme: validateTheme
    }
}

export default useTheme;