import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';

export default class CompanyDrawer extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Card
                    image={require('../../assets/ERP-tag-cloud-Infograph-600x351.jpg')}
                    containerStyle={{ margin: 0, padding: 0 }}
                >
                </Card>
                <List style={{ paddingTop: 0, marginTop: 0 }}>

                    <TouchableOpacity onPress={() => navigate('company')}>
                        <ListItem
                            title={'Company'}
                            leftIcon={{ name: 'account-balance' }}
                        />
                    </TouchableOpacity>
                </List>
            </ScrollView>
        );
    }
}
