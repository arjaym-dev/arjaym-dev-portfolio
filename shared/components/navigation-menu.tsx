'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, stagger } from 'motion/react'
import { Birdhouse, CircleUserRound, Dumbbell, Map } from 'lucide-react'

import { useDarkMode } from '../contexts/dark-mode'
const routes: { href: string; label: string; icon: React.JSX.Element }[] = [
    { href: '/', label: 'Home', icon: <Birdhouse size={14} /> },
    { href: '/about', label: 'About', icon: <CircleUserRound size={14} /> },
    { href: '/works', label: 'Works', icon: <Dumbbell size={14} /> },
    { href: '/journey', label: 'Journey', icon: <Map size={14} /> },
]

const Dots = () => {
    const { darkMode } = useDarkMode()

    const dotColor = darkMode ? 'bg-custom-light' : 'bg-foreground'
    return <div className={`w-2 h-2 ${dotColor} rounded-full group-hover:bg-custom-fuchsia transition-all`}></div>
}

const MenuItem = ({ route }: { route: { href: string; label: string; icon: React.JSX.Element } }) => {
    return (
        <motion.li variants={menuItemVariants}>
            <Link href={route.href} className="flex items-center gap-1 text-xs px-2 py-1">
                <div className="w-[14] h-[14]">{route.icon}</div>
                <span className="mt-0.5">{route.label}</span>
            </Link>
        </motion.li>
    )
}

const Menu = () => {
    return (
        <motion.ul variants={menuVariants} className="flex flex-col gap-x-5">
            {routes.map((route) => (
                <MenuItem key={route.href} route={route} />
            ))}
        </motion.ul>
    )
}

const NavigationMenu = () => {
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen(!open)
    }

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement

        if (!target.closest('.group')) {
            setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="group">
            <motion.div
                initial={false}
                animate={open ? 'open' : 'closed'}
                variants={parentVariants}
                onClick={handleMenu}
                className="absolute right-0 border-2 rounded-tl-lg rounded-bl-lg hover:border-custom-fuchsia hover:bg-custom-fuchsia/20 transition-all overflow-hidden"
            >
                <motion.div variants={dotVariants} className="w-full flex justify-center">
                    <div className="w-max flex gap-x-1 py-1 cursor-pointer">
                        {['', '', ''].map((_, index) => (
                            <Dots key={index} />
                        ))}
                    </div>
                </motion.div>
                <Menu />
            </motion.div>
        </div>
    )
}

export default NavigationMenu

const parentVariants = {
    open: {
        width: 82,
        height: 125,
    },
    closed: {
        width: 20,
        height: 50,
    },
}

const dotVariants = {
    open: {
        transform: 'rotate(0deg) translateX(0px)',
    },
    closed: {
        transform: 'rotate(90deg) translateX(15px)',
    },
}

const menuVariants = {
    open: {
        transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
    },
    closed: {
        transition: { delayChildren: stagger(0.05, { from: 'last' }) },
    },
}

const menuItemVariants = {
    open: {
        opacity: 1,
        x: 0,
    },
    closed: {
        opacity: 0,
        x: 100,
    },
}
