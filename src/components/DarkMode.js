import React from "react";
import  { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';



function DarkMode() {
    let chickedClass= "clicked";
    const body = document.body;
    const lightTheme ="light";
    const darkTheme ="dark";
    let theme
  
    if (localStorage) {
        theme = localStorage.getItem("theme")
    
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    const switchTheme = e => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            e.target.classList.remove(chickedClass)
            localStorage.setItem("theme", "light")
             theme = lightTheme
        } else {
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.remove(chickedClass)
            localStorage.setItem("theme", "dark")
            theme = darkTheme
        }
       
    }
    
    return (
        <button className={theme === "dark" ? "clicked btndark" : "btndark"} id='darkMode' onClick={switchTheme}>
            {theme === "light" ? (
                <Brightness4Icon style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
            ) : (
                <WbSunnyOutlinedIcon style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>
            )}
        </button>
    );
}

export default DarkMode;   