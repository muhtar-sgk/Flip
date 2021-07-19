/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Transactions from '../screens/Transactions';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

const Main = () => {
  const options = {
    gestureEnabled: true,
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <Stack.Navigator
      initialRouteName="Transactions"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Transactions" component={Transactions} options={options} />
      <Stack.Screen name="Detail" component={Detail} options={options} />
      </Stack.Navigator>
  );
};

export default Main;
