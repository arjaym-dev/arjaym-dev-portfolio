import { cookies } from 'next/headers'

import { getThemeClass } from '@/shared/utils/theme'

export default async function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const theme = (await cookies()).get('theme')?.value || 'currentColor'

    const themeClass = getThemeClass(theme)

    return <div className={`theme-wrapper ${themeClass}`}>{children}</div>
}
