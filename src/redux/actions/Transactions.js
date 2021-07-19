import {Networks, Types} from '../../consts';
import {showMessage} from '../../utils';
import axios from 'axios';
import {setLoading} from './Global';

export const getTransaction = () => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get(`${Networks.BASE_URL}`)
    .then((res) => {
      dispatch({type: Types.SET_LIST_TRANSACTION, value: res.data});
      dispatch(setLoading(false));
    })
    .catch((err) => {
      showMessage(err.toString());
      dispatch(setLoading(false));
    });
};
