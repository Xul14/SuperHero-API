export const getCharacterById = async() => {
    const url = `https://superheroapi.com/api.php/1299701917246334/${id}`
    const response = await fetch(url)
    const characterId = await response.json()
   
    return characterId
}

export const getCharacterSearchName = async(searchText) => {
    const url = `https://www.superheroapi.com/api.php/1299701917246334/search/${searchText}`
    const response = await fetch(url)
    const characterSearch = await response.json()
   
    return characterSearch
}