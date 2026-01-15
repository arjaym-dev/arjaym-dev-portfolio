import { useDarkMode } from '../contexts/dark-mode'

import ThemeSwitch from '../components/theme-switch'

const DarkModeLayout = ({ children }: { children: React.ReactNode }) => {
    const { darkMode } = useDarkMode()

    const darkModeClass = darkMode ? 'dark dark:bg-custom-dark dark:text-custom-light' : ''
    return (
        <div className={`flex flex-col min-h-screen transition-all ${darkModeClass}`}>
            <ThemeSwitch />
            {children}
        </div>
    )
}

export default DarkModeLayout
