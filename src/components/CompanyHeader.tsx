import React from 'react';
import '../css/CompanyHeader.css';

export default class CompanyHeader extends React.Component {
    state = {
        mainMenu: false,
        tradeMenu: false
    }

    toggleMainMenu = () => {
        console.log('toggle menu');
        this.setState({
            mainMenu: !this.state.mainMenu
        });
    }

    toggleTradeMenu = () => {
        console.log('toggle trade menu');
        this.setState({
            tradeMenu: !this.state.tradeMenu
        });
    }
    render() {

        return (
            <header id='CompanyHeader'>
                <div className="row blue">
                    <div className="container">
                        <h1>Company Name</h1>
                        <button 
                            className='menu-button' 
                            data-for='main-menu'
                            onClick={this.toggleMainMenu}>
                                Menu
                        </button>
                        <ul className={`main-menu ${this.state.mainMenu ? 'active' : ''}`}>
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
                        <button 
                            className='menu-button' 
                            data-for='trade-menu'
                            onClick={this.toggleTradeMenu}>
                                Trade Menu
                        </button>
                        <ul 
                            className={`trade-menu ${this.state.tradeMenu ? 'active' : ''}`}>
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
}