export const addFav = (character) => {
    return{
        type: "ADD_FAV",
        payload: character
    }
}

export const removeFav = (id) => {
    return{
        type: "REMOVE_FAV",
        payload: id
    }
}