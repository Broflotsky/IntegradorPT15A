const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_FAV':
            // eslint-disable-next-line no-case-declarations
            let copy1 = state.myFavorites;
            copy1.push(payload)
            return {
                ...state,
                myFavorites: copy1
            }

        case 'REMOVE_FAV':
            // eslint-disable-next-line no-case-declarations
            let copy2 = state.myFavorites.filter((char) => char.id !== Number(payload))
            return{
                ...state,
                myFavorites: copy2
            }
    
        default:
            return {
                ...state
            }
    }
}

export default rootReducer