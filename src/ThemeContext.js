import React from "react";
export const themes =  {
     
    dark: {
     
        background:{backgroundColor:"black"},
        text:{backgroundColor:"white"},
  

    },

    light:{
     
        background:{backgroundColor:"white"},
        text:{backgroundColor:"black"},
  

    },
}


const ThemeContext = React.createContext(themes.dark)
export default ThemeContext