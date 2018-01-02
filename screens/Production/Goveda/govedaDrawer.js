import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Card, List, ListItem, Icon } from 'react-native-elements'
import { Wrapper, WrapperHeader, TitleText } from '../../../styled-components/Wrapper'

export default class ProductionDrawer extends Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <ScrollView>
                <WrapperHeader>
                    <Icon name='arrow-back' color='#fff' onPress={() => goBack(null)} />
                    <TitleText>Goveda</TitleText>
                    <Icon name='home' color='#fff' onPress={() => navigate('Home')} />
                </WrapperHeader>


                <List style={{ marginTop: 0 }}>
                    <TouchableOpacity onPress={() => navigate('preGovedaKlanja')}>
                        <ListItem
                            title={'Predhodna klanja'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('aktGovedaKlanja')}>
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
