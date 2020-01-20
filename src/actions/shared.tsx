import API from '../utils/API'
export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData(trades:object) {
    return {
        type: RECEIVE_DATA,
        trades,
    }
}

export function handleInitialData() {
    return (dispatch:any) => {
        return Promise.all([
            API.fetchTrades(),
        ]).then((trades:Array<object>) => {
            dispatch(receiveData(trades))
        })
    }
}