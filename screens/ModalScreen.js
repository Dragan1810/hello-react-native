import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class ModalScreen extends Component {
        render() {
            return (
            <Text>Hello, Navigation! from ModalScreen</Text>
          );
        }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

export default ModalScreen;
