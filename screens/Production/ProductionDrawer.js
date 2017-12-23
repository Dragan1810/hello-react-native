import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar, FlatList } from 'react-native'
import { Card, List, ListItem } from 'react-native-elements'
import { Constants } from 'expo'
import AppHeader from '../../components/AppHeader'

export default class ProductionDrawer extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <AppHeader title={'Proizvodnja'} navigation={this.props.navigation}/>
                <List style={{ paddingTop: 65, marginTop: 0 }}>
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
