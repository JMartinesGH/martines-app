export const ADD_TRADE = 'ADD_TRADE'
export const REMOVE_TRADE = 'REMOVE_TRADE'

function addTrade(trade:object) {
    return {
        type: ADD_TRADE,
        trade,
    }
}

function removeTrade(id:number) {
    return {
        type: REMOVE_TRADE,
        id,
    }
}

export function handleAddTrade(name:any, cb:Function) {

}

export function handleDeleteTrade(trade:object) {

}