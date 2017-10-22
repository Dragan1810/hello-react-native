import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';


class HomeScreen extends Component {
    static navigationOptions = {
            drawerLabel: 'Screen one',
            drawerIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="move-to-inbox"
                    size={24}
                    style={{ color: tintColor }}
                />
        ),
      };

      render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.container}>
            <AppHeader />
            <View style={styles.text}>
              <View style={styles.searchBar}>
                <AppSearch />
                    </View>
              <View>
            <TouchableHighlight
                onPress={() => navigate('DrawerOpen')}
                style={{backgroundColor: '#7567B1'}}>
                <Text style={styles.buttonText}> Open Drawer </Text>
            </TouchableHighlight>
      </View>
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

export default HomeScreen;
