const initialState = {
    loggedIn: false,
    userData: [],
    chartData: [],
    charts: []
}

const rootReducer = (state = initialState, action) => {
    if (action.type == 'USER_DATA') {
        state = {
            ...state,
            userData: action.payload
        }
        console.log("User data loaded.")
    }

    return state;
}

export default rootReducer