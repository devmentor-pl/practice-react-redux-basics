import {v4 as uuid} from 'uuid';

export const addUser = (user) => {
    return {
        type: 'addUser',
        payload: { 
            user: user,
            id: uuid()
        }
    }
}