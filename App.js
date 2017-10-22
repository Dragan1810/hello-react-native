import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import ModalScreen from './screens/ModalScreen';

const MainNavigator = TabNavigator({
  Main: { screen: HomeScreen },
  ListItem: { screen: ListScreen },
  ModalScreen: { screen: ModalScreen }
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.text}>
          <View style={styles.searchBar}>
            <AppSearch />
          </View>
          <MainNavigator />
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    alignSelf: 'flex-start',
    height: 100,
    width: 320,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 65
  }
});

const MainNavigator = TabNavigator({
  Main: { screen: HomeScreen },
  ListItem: { screen: ListScreen },
  ModalScreen: { screen: ModalScreen }
});
export default App;
