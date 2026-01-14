import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import Header from '@/shared/components/header'
import './globals.css'

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
    title: 'Arjay Marquez',
    description:
        'I am a Frontend Developer with 4 years of experience and a passion for building seamless digital experiences. I am currently evolving into a Full-Stack Developer using the MERN stack, backed by a basic foundation in CI/CD practices.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                <Header />
                {children}
            </body>
        </html>
    )
}
