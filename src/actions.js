export function addUser(data) {
    return {
        type: 'addUser',
        payload: {data: data}
    }
}

export function removeUser(id) {
    return {
        type: 'removeUser',
        payload: {id},
    }
}

export function clearUsers() {
    return {
        type: 'clearUsers'
    }
}

export function getCurrentTime() {
    return {type: 'getCurrentTime'}
}