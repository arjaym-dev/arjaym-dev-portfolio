import { useState } from 'react'
import localStorageUtils from '../utils/local-storage'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState<boolean>((localStorageUtils.getItem('darkMode') as boolean) || false)

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newValue = !prev
            localStorageUtils.setItem('darkMode', newValue)
            return newValue
        })
    }

    return { darkMode, toggleDarkMode }
}

export default useDarkMode
