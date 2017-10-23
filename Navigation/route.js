import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DrawerContainer from '../screens/DrawerConainer';
import ListScreen from '../screens/ListScreen';
import ModalScreen from '../screens/ModalScreen';


    const DrawerNavigation = DrawerNavigator({
      Home: { screen: HomeScreen },
      ListItems: { screen: ListScreen },
      ModalItems: { screen: ModalScreen }

    }, {
      contentComponent: DrawerContainer,
      navigationOptions: ({ navigation }) => ({
        gesturesEnabled: true,
      })
    });

    export default DrawerNavigation;

