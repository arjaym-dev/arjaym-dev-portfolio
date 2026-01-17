'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

import { getThemeClass } from '@/shared/utils/theme'
const cookies = async () => {
    return await cookieStore.get('theme')
}

const ThemeSwitch = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const fetchTheme = async () => {
            const cookieTheme = await cookies()
            setTheme(cookieTheme?.value || 'light')
        }
        fetchTheme()
    }, [])

    const stroke = theme === 'dark' ? '#f00878' : 'currentColor'
    const animate = theme === 'dark' ? 'right' : 'left'

    const toggleDarkMode = async () => {
        const value = theme === 'dark' ? 'light' : 'dark'
        const themeClass = getThemeClass(value)

        cookieStore.set('theme', value)
        setTheme(value)

        const themeWrapperElement = document.querySelector('.theme-wrapper')
        if (themeWrapperElement) {
            themeWrapperElement.className = `theme-wrapper ${themeClass}`
        }
    }

    return (
        <div className={`absolute left-[15] top-[30] p-2 `}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer lucide lucide-toggle-left-icon lucide-toggle-left"
                initial={false}
                animate={animate}
                onClick={toggleDarkMode}
            >
                <motion.circle variants={circleVariants} cy="12" r="3" />
                <rect width="20" height="14" x="2" y="5" rx="7" />
            </motion.svg>
        </div>
    )
}

export default ThemeSwitch

const circleVariants = {
    left: {
        cx: '9',
    },
    right: {
        cx: '15',
    },
}
