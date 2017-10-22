import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import ModalScreen from '../screens/ModalScreen';


class Navi extends React.Component {

  render() {
    const MainNavigator = TabNavigator({
      Main: { screen: HomeScreen },
      ListItem: { screen: ListScreen },
      ModalScreen: { screen: ModalScreen }
    });
    return (
    <View>
      <MainNavigator />
    </View>
   );
  }
}


  export default Navi;
