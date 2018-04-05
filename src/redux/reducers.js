const initialState = {
    loggedIn: false,
    user: [],
    sign: "",
    chineseZodiac: [],
    numerology: [],
    userReports: []
}

const rootReducer = (state = initialState, action) => {
    if (action.type == 'LOGGED_IN') {
        state = {
            ...state,
            user: action.payload,
            loggedIn: true
        }
        console.log(state.user.firstname + " is logged in: " + state.loggedIn);
        console.log(state.user)
    }
    if (action.type == 'LOGGED_OUT') {
        state = {
            loggedIn: action.payload,
            user: "",
            sign: "",
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
    if (action.type == 'SUN_SIGN') {
        state = {
            ...state,
            sign: action.payload
        }
        console.log(state.sign)
    }
    return state;
}

export default rootReducer