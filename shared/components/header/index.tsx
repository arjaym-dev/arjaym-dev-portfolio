import Link from 'next/link'

import NavigationMenu from './navigation-menu'
import ThemeSwitch from './theme-switch'

const Header = () => {
    return (
        <>
            <header className="w-full px-[50] h-[100] flex items-center justify-between">
                <Link href="/" className="font-bold">
                    arjay<span className=" text-custom-fuchsia">m</span>
                </Link>
                <NavigationMenu />
            </header>
            <ThemeSwitch />
        </>
    )
}

export default Header
