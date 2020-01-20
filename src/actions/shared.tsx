import API, {fetchTrades, deleteTrade}from '../utils/API'
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
            fetchTrades(),
        ]).then((trades) => {
            dispatch(receiveData(trades))
        })
    }
}