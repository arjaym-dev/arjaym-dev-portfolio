export const getThemeClass = (theme: string) => {
    return theme === 'dark'
        ? 'dark dark:bg-custom-dark dark:text-custom-light overflow-y-auto h-screen '
        : 'overflow-y-auto h-screen '
}
