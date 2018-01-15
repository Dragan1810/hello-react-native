import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem, Icon } from 'react-native-elements';
import { Wrapper, WrapperHeader, TitleText } from '../../styled-components/Wrapper'


export default class MagacinDrawer extends Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <ScrollView>
                <WrapperHeader>
                    <Icon name='arrow-back' color='#fff' onPress={() => goBack(null)} />
                    <TitleText>Magacin</TitleText>
                    <Icon name='home' color='#fff' onPress={() => navigate('Home')} />
                </WrapperHeader>

                <List style={{ marginTop: 0 }}>
                    <TouchableOpacity onPress={() => navigate('stock')}>
                        <ListItem
                            title={'Lager'}
                            leftIcon={{ name: 'storage' }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('warehouse')}>
                        <ListItem
                            title={'Warehouse'}
                            leftIcon={{ name: 'storage' }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('depot')}>
                        <ListItem
                            title={'Depot'}
                            leftIcon={{ name: 'storage' }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('box')}>
                        <ListItem
                            title={'Boxes'}
                            leftIcon={{ name: 'storage' }}
                        />
                    </TouchableOpacity>
                </List>
            </ScrollView>
        );
    }
}
