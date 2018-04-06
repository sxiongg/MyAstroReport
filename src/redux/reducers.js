const initialState = {
    loggedIn: false,
    user: [],
    sign: "",
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
        console.log(state.user[0].firstName + " is logged in.");
        console.log(state.loggedIn);
        console.log(state.user)
    }
    if (action.type == 'LOGGED_OUT') {
        state = {
            loggedIn: action.payload,
            user: "",
            sign: "",
            chineseZodiac: [],
            numerology: [],
        }
        console.log("Succesfully logged out.");
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
    if (action.type == 'SUN_SIGN') {
        state = {
            ...state,
            sign: action.payload
        }
        console.log(state.sign)
    }
    if (action.type == 'VIEW_REPORTS') {
        state = {
            ...state,
            user: action.payload
        }
        console.log(state.user)
    }

    return state;
}

export default rootReducer