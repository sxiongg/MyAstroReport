export const changeLoggedInState = response => ({type: 'LOGGED_IN', payload: response})

export const changeStateToFalse = bool => ({type: 'LOGGED_OUT', payload: bool})

export const chineseZodiacResponse = response => ({type: 'CHINESE_ZODIAC', payload: response})

export const numerologyResponse = response => ({type: 'NUMEROLOGY', payload: response})

export const sunSign = response => ({type: 'SUN_SIGN', payload: response})

export const updateUserState = response => ({type: 'VIEW_REPORTS', payload: response})