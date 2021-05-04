export const RECEVIE_USERS = "RECEVIE_USERS"

export function recevieUsers(users){
    return {
        type: RECEVIE_USERS,
        users
    }
}