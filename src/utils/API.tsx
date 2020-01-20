import {trades as tradeList} from '../components/App'

const API = {
    fetchTrades: Promise,
    deleteTrade: Promise
};

let trades = tradeList;

export let fetchTrades = () => {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res(trades)
        }, 2000)
    })
}
export let deleteTrade = (id:number) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            trades = trades.filter((trade) => trade.id !== id);
        }, 300)
    });
}

export default App;