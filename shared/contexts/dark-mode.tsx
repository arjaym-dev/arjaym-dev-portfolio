'use client'

import React, { createContext, useState, useContext } from 'react'
import localStorageUtils from '../utils/local-storage'

const DarkModeContext = createContext<{
    darkMode: boolean
    toggleDarkMode: () => void
}>({
    darkMode: false,
    toggleDarkMode: () => {},
})

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [darkMode, setDarkMode] = useState<boolean>(localStorageUtils.getItem('theme') || false)

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newValue = !prev
            localStorageUtils.setItem('theme', newValue)
            return newValue
        })
    }

    return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
}

export const useDarkMode = () => {
    return useContext(DarkModeContext)
}
