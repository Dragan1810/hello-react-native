import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem, Icon } from 'react-native-elements';
import { Wrapper, WrapperHeader, TitleText } from '../../styled-components/Wrapper'



export default class CompanyDrawer extends Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <ScrollView>
                <WrapperHeader>
                    <Icon name='arrow-back' color='#fff' onPress={() => goBack(null)} />
                    <TitleText>Kartoteka</TitleText>
                    <Icon name='home' color='#fff' onPress={() => navigate('Home')} />
                </WrapperHeader>

                <List style={{ marginTop: 0 }}>

                    <TouchableOpacity onPress={() => navigate('product')}>
                        <ListItem
                            title={'Products'}
                            leftIcon={{ name: 'settings' }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('animal')}>
                        <ListItem
                            title={'Animal'}
                            leftIcon={{ name: 'settings' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('subAnimal')}>
                        <ListItem
                            title={'SubAnimal'}
                            leftIcon={{ name: 'settings' }}
                        />
                    </TouchableOpacity>
                </List>
            </ScrollView>
        );
    }
}
