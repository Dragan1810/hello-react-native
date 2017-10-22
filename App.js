import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import ModalScreen from './screens/ModalScreen';

const App = DrawerNavigator({
  ScreenOne: { screen: HomeScreen },
  ScreenTwo: { screen: ListScreen },
  ScreenThree: {screen: ModalScreen }
});
export default App;
