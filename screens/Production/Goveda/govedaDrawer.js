import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import AppHeader from '../../../components/AppHeader'

export default class ProductionDrawer extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <AppHeader title={'Goveda'} navigation={this.props.navigation}/>
                <List style={{ paddingTop: 65, marginTop: 0 }}>
                    <TouchableOpacity onPress={() => navigate('preGovedaKlanja')}>
                        <ListItem
                            title={'Predhodna klanja'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('klanje')}>
                        <ListItem
                            title={'Aktivna klanja'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>
                </List>
            </ScrollView>
        );
    }
}
