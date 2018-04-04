const initialState = {
    loggedIn: false,
    user: "",
    chineseZodiac: [],
    numerology: [],
}

const rootReducer = (state = initialState, action) => {
    if (action.type == 'LOGGED_IN') {
        state = {
            ...state,
            user: action.payload,
            loggedIn: true
        }
        console.log(state.user + " is logged in: " + state.loggedIn);
    }
    if (action.type == 'LOGGED_OUT') {
        state = {
            loggedIn: action.payload,
            user: "",
            chineseZodiac: [],
            numerology: []
        }
        console.log("User logged in: " + state.loggedIn);
    }
    if (action.type == 'CHINESE_ZODIAC') {
        state = {
            ...state,
            chineseZodiac: action.payload,
        }
        console.log(state.chineseZodiac)
    }
    if (action.type == 'NUMEROLOGY') {
        state = {
            ...state,
            numerology: action.payload,
        }
        console.log(state.numerology)
    }
    return state;
}

export default rootReducer