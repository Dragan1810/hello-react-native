import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../components/AppHeader';
import AppSearch from '../components/AppSearch';
import { Constants } from 'expo';


class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/react-navigation.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };
        render() {
          let { heightD, widthD } = Dimensions.get('window');
          const { icon, container, text, searchBar } = styles;
         // console.log(this.props.navigation)
            return (
                <View style={text}>
                  <AppHeader />
                  <View style={searchBar}>
                    <AppSearch />
                  </View>
                    <Text>Testing Home Screen</Text>
                </View>
              );
        }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    container: {
      flex: 1,
    },
    searchBar: {
      alignSelf: 'flex-start',
      height: 100,
      width: widthD,
    },
    text: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 65
    }
  });

export default HomeScreen;
