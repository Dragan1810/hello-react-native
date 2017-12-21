import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native'


const Activity = () => (
    <ActivityIndicator
        animating={true}
        style={styles.indicator}
        size="large"
    />
)


const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        paddingTop:40,
    }
})




export default Activity;


