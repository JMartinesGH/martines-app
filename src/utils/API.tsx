// https://api.coindesk.com/v1/bpi/currentprice/USD.json

export function fetchBitcoinValue(usdValue:number){
    const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'

    return fetch(endpoint)
        .then((res) => res.json())
        .then((bpi) => {
            return bpi.USD;
        })
}