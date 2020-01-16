import React from 'react';
import '../css/CompanyHeader.css';


export default function CompanyHeader() {
    return (
        <header id='CompanyHeader'>
            <div className="row blue">
                <div className="container">
                    <h1>Company Name</h1>
                    <ul className='main-menu'>
                        <li>Buy bitcoins</li>
                        <li className='active'>Sell bitcoins</li>
                        <li>Wallet</li>
                        <li>Support</li>
                        <li>Your Account</li>
                    </ul>
                </div>
            </div>
            <div className="row white">
                <div className="container">
                    <ul className='trade-menu'>
                        <li>Overview</li>
                        <li className='active'>Trades</li>
                        <li>Disputes</li>
                        <li>Your Offers</li>
                        <li>My Team</li>
                        <li>Trade History</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}