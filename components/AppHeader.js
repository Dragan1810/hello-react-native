import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

class AppHeader extends Component {
    render() {
        const { container } = styles;
        return (
            <Header
            backgroundColor={'#3D6DCC'}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3D6DCC'
    }
});

export default AppHeader;
