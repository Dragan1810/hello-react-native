import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class HomeScreen extends Component {
    static navigationOptions = {
            drawerLabel: 'Inbox',
            drawerIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="move-to-inbox"
                    size={24}
                    style={{ color: tintColor }}
                />
        ),
      };

        render() {
            return (
                <ScrollView>
                    <Text>Bilo staaa</Text>
              </ScrollView>
              );
        }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

export default HomeScreen;
