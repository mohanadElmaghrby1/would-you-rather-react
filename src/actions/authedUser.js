
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT= 'USER_LOGOUT'

export function login(id){
    return {
        type: USER_LOGIN,
        id
    }
}

export function logout(id){
    return {
        type: USER_LOGOUT,
        id, 
    }
}

