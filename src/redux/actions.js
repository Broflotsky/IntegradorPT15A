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

export const filterCards = (gender) => {
    return{
        type: "FILTER",
        payload: gender
    }
}

export const orderCards = (order) => {
    return{
        type: "ORDER",
        payload: order
    }
}

