import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class ListScreen extends Component {

        render() {
            return (<Text>Hello, Navigation! from ListScreen</Text>);
        }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

export default ListScreen;
