import { motion } from 'motion/react'

import { useDarkMode } from '../contexts/dark-mode'

const ThemeSwitch = () => {
    const { darkMode, toggleDarkMode } = useDarkMode()

    const darkModeFill = darkMode ? '#f00878' : 'currentColor'
    return (
        <div className={`absolute left-[15] top-[30] p-2 `}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={darkModeFill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer lucide lucide-toggle-left-icon lucide-toggle-left"
                initial={false}
                animate={darkMode ? 'right' : 'left'}
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
