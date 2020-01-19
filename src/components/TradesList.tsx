import React from 'react'
import '../css/TradesList.css';


type NoticeProps = {
    trades: Array<object>,
    onUpdateTrade: Function,
    showMessages: Function
};

export default class TradesList extends React.Component<NoticeProps> {
    state = {
        activeTrade: 0,
        trades: this.props.trades
    }
    activateTrade = (id: any) => {
        this.setState({
            activeTrade: id
        })

        this.props.onUpdateTrade(id)
        this.props.showMessages()
    }
    render() {

        return (
            <div id='Trades' className="column">
                <ul>
                    {this.state.trades.map((trade: any) => (
                        <li key={trade.id}
                            className={this.state.activeTrade === trade.id ? 'active' : ''}
                            onClick={() => {
                                this.activateTrade(trade.id)
                            }}
                        >
                            <div>
                                <div className="trade-body">
                                    <h4>{trade.user.username} is buying</h4>
                                    <h2>{trade.type}</h2>
                        <h4>{trade.priceUSD} USD({trade.priceUSD/8640.07} BTC)</h4>
                                </div>
                                <div className='avatar'>Avatar</div>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}