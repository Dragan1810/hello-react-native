import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import AppHeader from '../../components/AppHeader'

export default class MagacinDrawer extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <AppHeader title={'Magacin'} navigation={this.props.navigation}/>
                <List style={{ paddingTop: 65, marginTop: 0 }}>
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
