import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem, Icon } from 'react-native-elements';
import { Wrapper, WrapperHeader, TitleText } from '../../../styled-components/Wrapper'
import Header from '../../../reusable-components/Header'
import GridList from '../../../reusable-components/GridLista'
import { PigRoutes } from '../../../Config/index'


export default class ProductionDrawer extends Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <ScrollView>
                <Header title={'Svinje'} navigate={navigate} goBack={goBack}/>
                <GridList navigate={navigate} MainRoutes={PigRoutes}/>
            </ScrollView>
        );
    }
}
