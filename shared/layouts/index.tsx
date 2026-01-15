'use client'

import dynamic from 'next/dynamic'

import { DarkModeProvider } from '../contexts/dark-mode'

const DarkModeLayout = dynamic(() => import('./dark-mode-layout'), {
    ssr: false,
})

const DarkModeWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <DarkModeProvider>
            <DarkModeLayout>{children}</DarkModeLayout>
        </DarkModeProvider>
    )
}

export default DarkModeWrapper
