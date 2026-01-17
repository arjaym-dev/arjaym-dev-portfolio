import { cookies } from 'next/headers'

import { getThemeClass } from '@/shared/utils/theme'

export default async function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
    const theme = cookieStore.get('theme')?.value || 'light'

    const themeClass = getThemeClass(theme)

    return <div className={`theme-wrapper flex flex-col min-h-screen ${themeClass} transition-all`}>{children}</div>
}
