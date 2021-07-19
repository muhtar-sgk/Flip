import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import {Provider, useSelector} from 'react-redux';
import {Loading} from './src/components';
import Main from './src/navigations/Main';
import store from './src/redux/store';

const MainApp = () => {
  const {isLoading} = useSelector((state) => state.globalReducer);

  return (
    <NavigationContainer>
      <Main />
      <FlashMessage position="top" hideStatusBar={true} />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
