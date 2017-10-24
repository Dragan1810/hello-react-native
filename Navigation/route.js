import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DrawerContainer from '../screens/DrawerContainer';
import CompanyScreen from '../screens/CompanyScreen';
import ModalScreen from '../screens/ModalScreen';


    const DrawerNavigation = DrawerNavigator({
      Home: { screen: HomeScreen },
      ListItems: { screen: CompanyScreen },
      ModalItems: { screen: ModalScreen }

    }, {
      contentComponent: DrawerContainer,
    });

    export default DrawerNavigation;

