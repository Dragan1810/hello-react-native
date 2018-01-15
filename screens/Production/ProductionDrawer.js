import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar, FlatList } from 'react-native'
import { Card, List, ListItem, Icon } from 'react-native-elements'
import Header from '../../reusable-components/Header'

export default class ProductionDrawer extends Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <ScrollView>
                <Header title={'Proizvodnja'} navigate={navigate} goBack={goBack}/>
                <List style={{ marginTop: 0 }}>
                    <TouchableOpacity onPress={() => navigate('goveda')}>
                        <ListItem
                            title={'Goveda'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('lamb')}>
                        <ListItem
                            title={'Jagnjad'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('pig')}>
                        <ListItem
                            title={'Svinje'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>
                </List>
            </ScrollView>
        );
    }
}
