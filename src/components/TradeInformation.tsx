import React from 'react';
import '../css/TradeInformation.css';

export default function TrandeInformation() {
    return (
        <div id='TradeInformation' className="column right aside">
            <div className='info'>
                <h2>You are trading with USER</h2>
                <h3>Started XX minutes ago</h3>
                <button className='release-btn'>Release bitcoins</button>
            </div>
            <div className='grid'>
                <div className='item'><span>Icon</span><span>Avatar</span></div>
                <div className='item'><span># of Trades</span><span>4</span></div>
                <div className='item'><span>Trade Status</span><span className='positive'>Paid</span></div>
                <div className='item'><span>Trade Hash</span><span><span ></span>{Math.floor(Math.random() * Math.floor(10000000))}</span></div>
                <div className='item'><span>Amount USD</span><span>25.00</span></div>
                <div className='item'><span>AMOUNT BTC</span><span>0.0002885858585</span></div>
            </div>
        </div>
    );
}