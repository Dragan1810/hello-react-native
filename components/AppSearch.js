import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

class AppSearch extends Component {
    render() {
        return (
            <SearchBar
                containerStyle={styles.container}
                round
                lightTheme
                placeholder='Type Here...'
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});


export default AppSearch;
