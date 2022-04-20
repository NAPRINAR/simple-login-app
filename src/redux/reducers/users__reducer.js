export const constants = {
    SET_AUTHORIZED: "SET_AUTHORIZED",
    LOGOUT: "LOGOUT",
    SET_POSTS: "SET_POSTS",
    SET_CURRENT_POST: "SET_CURRENT_POST",
    CHECK_ONLINE: "CHECK_ONLINE",
    CLEAR_CURRENT: "CLEAR_CURRENT"
}

const initialState = {
    isOnline: false,
    posts: [],
    current: {},
    user: {}
}

export const users__reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_AUTHORIZED: {
            localStorage.setItem('ISAUTH', "TRUE")
            return {...state, isOnline: true, user: {email: action.payload.email}}
        }
        case constants.LOGOUT: {
            localStorage.removeItem("ISAUTH")
            localStorage.removeItem("EMAIL")
            return {...state, isOnline: false}
        }
        case constants.SET_POSTS: {
            return {...state, current: {}, posts: [...action.payload.data]}
        }
        case constants.SET_CURRENT_POST: {
            return {...state, current: {...action.payload.post}}
        }
        case constants.CHECK_ONLINE: {
            return {...state, isOnline: !!action.payload.online}
        }
        case constants.CLEAR_CURRENT: {
            return {...state, current: {}}
        }
        default: {
            return state
        }
    }
}