const stringCollection = {
    cookiesStrToObj: (cookies: string): Record<string, string> => {
        return cookies.split(';').reduce((acc: Record<string, string>, item) => {
            // 1. Trim whitespace around the entry
            const trimmed = item.trim()

            // 2. Find the index of the first '='
            const separatorIndex = trimmed.indexOf('=')

            // 3. If no '=' is found, skip this item
            if (separatorIndex === -1) return acc

            // 4. Extract key and value separately
            const key = trimmed.slice(0, separatorIndex)
            const value = trimmed.slice(separatorIndex + 1)

            // 5. Assign to object
            acc[key] = value
            return acc
        }, {})
    },
}

export default stringCollection
