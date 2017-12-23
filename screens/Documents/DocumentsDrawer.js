import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import AppHeader from '../../components/AppHeader'

export default class CompanyDrawer extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <AppHeader title={'Kartoteka'} navigation={this.props.navigation}/>
                <List style={{ paddingTop: 65, marginTop: 0 }}>

                    <TouchableOpacity onPress={() => navigate('inputNote')}>
                        <ListItem
                            title={'Input Note'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>

                </List>
            </ScrollView>
        );
    }
}
