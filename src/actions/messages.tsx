export const ADD_MESSAGE = 'ADD_MESSAGE'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

function addMessage(message:object) {
    return {
        type: ADD_MESSAGE,
        message,
    }
}

function removeMessage(id:number) {
    return {
        type: REMOVE_MESSAGE,
        id,
    }
}

export function handleAddMessage(name:any, cb:Function) {

}

export function handleDeleteMessage(message:object) {

}