import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';

export default class DrawerContainer extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Card
                    image={require('../assets/ERP-tag-cloud-Infograph-600x351.jpg')}
                    containerStyle={{ margin: 0, padding: 0 }}
                >
                </Card>
                <List style={{ paddingTop: 0, marginTop: 0 }}>

                    <TouchableOpacity onPress={() => navigate('ListItems')}>
                        <ListItem
                            title={'Company'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('BoxItems')}>
                        <ListItem
                            title={'Box'}
                            leftIcon={{ name: 'storage' }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('ModalItems')}>
                        <ListItem
                            title={'Demo 3'}
                            leftIcon={{ name: 'settings' }}
                        />
                    </TouchableOpacity>
                </List>
            </ScrollView>
        );
    }
}
