import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import AppHeader from '../../../components/AppHeader'


export default class ProductionDrawer extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <AppHeader navigation={this.props.navigation} title={'Svinje'} />
                <List style={{ paddingTop: 65, marginTop: 0 }}>
                    <TouchableOpacity onPress={() => navigate('prePigKlanja')}>
                        <ListItem
                            title={'Prethodna Klanja'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('aktPigKlanja')}>
                        <ListItem
                            title={'Aktivna Klanja'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>
                </List>
            </ScrollView>
        );
    }
}
