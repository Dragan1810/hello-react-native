import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import AppHeader from '../../../components/AppHeader'

export default class ProductionDrawer extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <AppHeader title={'Jagnjad'} navigation={this.props.navigation}/>
                <List style={{ paddingTop: 65, marginTop: 0 }}>
                    <TouchableOpacity onPress={() => navigate('preLambKlanja')}>
                        <ListItem
                            title={'Predhodna Klanja'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('cetvrtanje')}>
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
