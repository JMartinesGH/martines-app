import React from 'react';
import '../css/TradeInformation.css';

export default function TrandeInformation() {
    return (
        <div id='TradeInformation' className="column right">
            <div className='info'>
                <h2>You are trading with USER</h2>
                <h3>Started XX minutes ago</h3>
                <button className='release-btn'>Release bitcoins</button>
            </div>
            <div className='grid'>
                <div className='item'>Icon</div>
                <div className='item'># of Trades</div>
                <div className='item'>Trade Status</div>
                <div className='item'>Trade Hash</div>
                <div className='item'>Amount USD</div>
                <div className='item'>AMOUNT BTC</div>
            </div>
        </div>
    );
}