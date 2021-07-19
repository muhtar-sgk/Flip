import {showMessage as showToast} from 'react-native-flash-message';
import {Colors} from '../consts';

export const showMessage = (message, type) => {
  showToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? Colors.GREEN : Colors.RED,
    duration: 4000,
  });
};
