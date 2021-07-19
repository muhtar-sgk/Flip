import {combineReducers} from 'redux';
import {transactionReducer} from './Transactions';
import {globalReducer} from './GLobal';

const reducer = combineReducers({
  transactionReducer,
  globalReducer,
});

export default reducer;
