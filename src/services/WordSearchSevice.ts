export async function wordSearch(query: string) {
    if (!query)
        return []
    return ["Alpha", "Albino", "Albatross", query]
}