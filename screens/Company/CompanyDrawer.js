import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import Header from '../../reusable-components/Header'


export default class CompanyDrawer extends Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <ScrollView>
                <Header title={'Kompanije'} navigate={navigate} goBack={goBack}/>
                <List style={{ marginTop: 0 }}>

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
