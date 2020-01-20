import { combineReducers } from 'redux';

import trades from './trades';
import messages from './messages';

export default combineReducers({
    trades,
    messages,
})