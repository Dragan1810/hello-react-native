import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Icon, List, ListItem } from 'react-native-elements';

export default class DrawerContainer extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const list = [
            {
              title: 'Appointments',
              icon: 'av-timer'
            },
            {
              title: 'Trips',
              icon: 'flight-takeoff'
            },
            {
                title: 'Accounts',
                icon: 'card-giftcard'
            },
            {
                title: 'Balance',
                icon: 'account-balance'
            },
            {
                title: 'Passwords',
                icon: 'fingerprint'
            },
            {
                title: 'Media',
                icon: 'perm-media'
            },
            {
                title: 'Settings',
                icon: 'settings'
            }
          ];
        return (
            <ScrollView>
                <Card
                    image={require('../assets/ERP-tag-cloud-Infograph-600x351.jpg')}
                    containerStyle={{ margin: 0, padding: 0 }}
                >
                </Card>
                <List style={{paddingTop: 0, marginTop: 0 }}>
                    {list.map((item, i) => (
                    <TouchableOpacity onPress={() => navigate('ModalScreen')}>
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{ name: item.icon }}
                        />
                    </TouchableOpacity>
                    ))
                    }
                </List>
            </ScrollView>
        );
    }
}
