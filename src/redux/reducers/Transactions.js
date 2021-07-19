import {Types} from '../../consts';

const initTransactions = {
  transactionList: [],
};

export const transactionReducer = (state = initTransactions, action) => {
  if (action.type === Types.SET_LIST_TRANSACTION) {
    return {
      ...state,
      transactionList: action.value,
    };
  }

  return state;
};
