import React, { useState, useContext } from 'react'

const ThemeContext = React.createContext();
const UpdateThemeContext = React.createContext();

export function useThemeContext () {
  return useContext(ThemeContext)
}

export function useUpdateThemeContext () {
  return useContext(UpdateThemeContext)
} 

export function ThemeProvider({ children }) {
  const [ theme , setTheme ] = useState("light")

  function toggleTheme () {
    if(theme === "light") {
      setTheme("dark")
    } else (
      setTheme("light")
    )
    }

  return (
    <ThemeContext.Provider value = {theme}>
      <UpdateThemeContext.Provider value = {toggleTheme}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
