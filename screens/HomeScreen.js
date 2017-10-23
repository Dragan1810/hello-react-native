import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class HomeScreen extends Component {
        render() {
          //console.log(this.props.navigation)
            return (
                <View>
                  <AppHeader />
                    <Text>Bilo staaa</Text>
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
      width: 320,
    },
    text: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 65
    }
  });

export default HomeScreen;
