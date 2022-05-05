import {v4 as uuid} from 'uuid';

export const addUser = (value) => {
    return {
        type: 'addUser',
        payload: { 
            name: value,
            id: uuid(),
         }
    }

}

export const removeUser = () => {

}