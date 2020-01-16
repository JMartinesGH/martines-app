import React from 'react';
import TradesList from './TradesList'
import CompanyHeader from './CompanyHeader'
import Messages from './Messages'
import TradeInformation from './TradeInformation'

const App: React.FC = () => {
  return (
    <div className="App">
      <CompanyHeader />
      <div className='container'>
        <TradesList />
        <Messages />
        <TradeInformation />
      </div>
    </div>
  );
}

export default App;
