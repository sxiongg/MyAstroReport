export const changeLoggedInState = name => ({type: 'LOGGED_IN', payload: name})

export const changeStateToFalse = bool => ({type: 'LOGGED_OUT', payload: bool})

export const chineseZodiacResponse = response => ({type: 'CHINESE_ZODIAC', payload: response})

export const numerologyResponse = response => ({type: 'NUMEROLOGY', payload: response})