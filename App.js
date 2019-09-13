import React from 'react';
import Profile from './src/screens/Profile';
import Acceleration from './src/screens/Acceleration';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const StackRouterRoot = createStackNavigator({
  Acceleration: { screen: Acceleration },
  Profile: { screen: Profile},
});

const App = createAppContainer(
  StackRouterRoot
);


export default App;
