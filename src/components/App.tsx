import React from 'react';
import TradesList from './TradesList'
import CompanyHeader from './CompanyHeader'
import Messages from './Messages'
import TradeInformation from './TradeInformation'

const trades = [
  {
    id: 0,
    user: { username: 'John', positive: 37, negative: 1, trades: 38 },
    priceUSD: '77.00',
    type: 'Amazon Gift Card',
    paid: false,
    messages: [
      {
        id: 1,
        type: 'sent',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ultricies velit, eget gravida tellus. Etiam consequat, metus vel sodales fermentum, metus tortor accumsan risus, id porta dolor ante nec ante.',
        avatar: 'avatar',
      },
      {
        id: 2,
        type: 'received',
        text: 'Aenean eget luctus eros, eu fermentum enim. Phasellus non sagittis nisi. Vivamus sit amet felis vehicula, maximus lorem in, imperdiet eros. Cras posuere vitae enim a venenatis. Nullam molestie feugiat gravida. Phasellus iaculis rhoncus nulla at pulvinar. Proin sit amet nisi vulputate, pellentesque sem sit amet, feugiat metus. Morbi dolor massa, faucibus vitae arcu ornare, porta efficitur ex. Sed sollicitudin ex dui, non aliquam massa ultricies id.',
        avatar: 'avatar',
      },
      {
        id: 3,
        type: 'sent',
        text: 'Aliquam vel ante malesuada, rutrum augue nec, gravida metus.',
        avatar: 'avatar',
      },
    ]
  },
  {
    id: 1,
    user: { username: 'Jane', positive: 16, negative: 0, trades: 16 },
    priceUSD: '30.00',
    type: 'iTunes Gift Card',
    paid: true,
    messages: [
      {
        id: 1,
        type: 'sent',
        text: 'Hey would you like to buy a bitcoin',
        avatar: 'avatar',
      },
      {
        id: 2,
        type: 'received',
        text: 'This is chat number 2',
        avatar: 'avatar',
      },
      {
        id: 3,
        type: 'sent',
        text: 'Is this working',
        avatar: 'avatar',
      },
    ]
  },
  {
    id: 2,
    user: { username: 'Jamie', positive: 100, negative: 1, trades: 101 },
    priceUSD: '45.00',
    type: 'iTunes Gift Card',
    paid: false,
    messages: [
      {
        id: 1,
        type: 'sent',
        text: 'Hello, how are you?',
        avatar: 'avatar',
      },
      {
        id: 2,
        type: 'received',
        text: 'Good and you?',
        avatar: 'avatar',
      },
      {
        id: 3,
        type: 'sent',
        text: 'Aliquam vel ante malesuada, rutrum augue nec, gravida metus.',
        avatar: 'avatar',
      },
    ]
  },
]


class App extends React.Component {
  state = {
    activeTrade: 0,
    displayMessages: false,
    displayInformation: false
  }
  updateTrade = (id: number) => {
    this.setState({
      activeTrade: id
    })
  }
  toggleMessages = () => {
    console.log('display messages on mobile')
    this.setState({
      displayMessages: !this.state.displayMessages,
      displayInformation: false
    })
  }
  toggleInformation = () => {
    console.log('display messages on mobile')
    this.setState({
      displayInformation: !this.state.displayInformation
    })
  }
  render() {
    return (
      <div className="App">
        <CompanyHeader />
        <div className='container'>
          <TradesList trades={trades} onUpdateTrade={this.updateTrade} showMessages={this.toggleMessages}/>
          <Messages trades={trades} activeTrade={this.state.activeTrade} isActive={this.state.displayMessages} toggleMessages={this.toggleMessages} toggleInformation={this.toggleInformation}/>
          <TradeInformation trade={trades[this.state.activeTrade]} isActive={this.state.displayInformation}/>
        </div>
      </div>
    );
  }
}

export default App;
