import React from 'react'
import '../css/TradesList.css';

export default function TradesList() {
    return (
        <div id='Trades' className="column">
            <ul>
                <li key={Math.floor(Math.random() * Math.floor(100))}>
                    <div>
                        <div className="trade-body">
                        <h4>User is buying</h4>
                        <h2>Payment Method</h2>
                        <h3>30 USD(0.005412345 BTC)</h3>
                        </div>
                        <div className='avatar'>Avatar</div>
                    </div>
                </li>

                <li key={Math.floor(Math.random() * Math.floor(100))}>
                    <div>
                        <div className="trade-body">
                        <h4>User is buying</h4>
                        <h2>Payment Method</h2>
                        <h3>30 USD(0.005412345 BTC)</h3>
                        </div>
                        <div className='avatar'>Avatar</div>
                    </div>
                </li>

                <li key={Math.floor(Math.random() * Math.floor(100))} className='active'>
                    <div>
                        <div className="trade-body">
                            <h4>User is buying</h4>
                            <h2>Payment Method</h2>
                            <h3>30 USD(0.005412345 BTC)</h3>
                        </div>
                        <div className='avatar'>Avatar</div>
                    </div>
                </li>

                <li key={Math.floor(Math.random() * Math.floor(100))}>
                    <div>
                        <div className="trade-body">
                        <h4>User is buying</h4>
                        <h2>Payment Method</h2>
                        <h3>30 USD(0.005412345 BTC)</h3>
                        </div>
                        <div className='avatar'>Avatar</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}