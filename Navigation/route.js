import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DrawerContainer from '../screens/DrawerContainer';
import CompanyScreen from '../screens/CompanyScreen';
import BoxScreen from '../screens/BoxScreen';


    const DrawerNavigation = DrawerNavigator({
      Home: { screen: HomeScreen },
      ListItems: { screen: CompanyScreen },
      BoxItems: { screen: BoxScreen },

    }, {
      contentComponent: DrawerContainer,
    });

    export default DrawerNavigation;

