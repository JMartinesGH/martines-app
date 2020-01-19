import React from 'react';
import '../css/TradeInformation.css';
import {fetchBitcoinValue} from '../utils/API'

function bitcoinInfo(usd: number){
    fetchBitcoinValue(usd)
}

export default function TrandeInformation(props:any) {
    return (
        <div id='TradeInformation' className={`column right aside ${props.isActive ? 'display' : ''}`}>
            <div className='info'>
                <h2>You are trading with {props.trade.user.username}</h2>
                <h3>Started XX minutes ago</h3>
                <button className='release-btn'>Release bitcoins</button>
            </div>
            <div className='grid'>
                <div className='item'><span>Icon</span><span>Avatar</span></div>
                <div className='item'><span># of Trades</span><span>{props.trade.user.trades}</span></div>
                <div className='item'><span>Trade Status</span><span className={props.trade.paid ? 'positive' : 'negative'}>{props.trade.paid ? 'Paid' : 'Unpaid'}</span></div>
                <div className='item'><span>Trade Hash</span><span><span ></span>{Math.floor(Math.random() * Math.floor(10000000))}</span></div>
                <div className='item'><span>Amount USD</span><span>{props.trade.priceUSD}</span></div>
    <div className='item'><span>AMOUNT BTC</span><span>{props.trade.priceUSD/8640.07}</span></div>
            </div>
        </div>
    );
}