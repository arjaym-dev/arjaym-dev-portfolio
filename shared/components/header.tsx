import React from 'react'
import Link from 'next/link'

import { HomeSvgIcon, ProfileSvgIcon, BookStackSvgIcon, MapSvgIcon } from '../svg'

const routes: { href: string; label: string; icon: React.JSX.Element }[] = [
    { href: '/', label: 'Home', icon: <HomeSvgIcon /> },
    { href: '/about', label: 'About', icon: <ProfileSvgIcon /> },
    { href: '/works', label: 'Works', icon: <BookStackSvgIcon /> },
    { href: '/journey', label: 'Journey', icon: <MapSvgIcon /> },
]

const Header = () => {
    return (
        <header className="w-full px-[50] h-[100] flex items-center justify-between">
            <Link href="/" className="font-bold">
                arjay<span className=" text-custom-fuchsia">m</span>
            </Link>
            {/* <ul className="flex gap-x-5">
                {routes.map((route) => (
                    <li key={route.href}>
                        <Link href={route.href} className="flex items-center gap-1">
                            <div className="w-[18] h-[18]">{route.icon}</div>
                            <span className="mt-0.5">{route.label}</span>
                        </Link>
                    </li>
                ))}
            </ul> */}
        </header>
    )
}

export default Header
