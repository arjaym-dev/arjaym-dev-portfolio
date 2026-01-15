/**
 * Can you create a function for handling localStorage such as getting, setting, and removing items?
 */

const localStorageUtils = {
    getItem: (key: string) => {
        if (typeof window !== 'undefined') {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : null
        }
        return null
    },
    setItem: (key: string, value: string | Record<string, unknown> | boolean) => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, JSON.stringify(value))
        }
    },
    removeItem: (key: string) => {
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem(key)
        }
    },
}

export default localStorageUtils
