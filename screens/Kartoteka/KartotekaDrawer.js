import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List, ListItem, Icon } from 'react-native-elements';
import { Wrapper, WrapperHeader, TitleText } from '../../styled-components/Wrapper'
import Header from '../../reusable-components/Header'
import GridList from '../../reusable-components/GridLista'
import { KartotekaRoutes } from '../../Config/index'



export default class CompanyDrawer extends Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <ScrollView>
               <Header title={'Kartoteka'} navigate={navigate} goBack={goBack}/>
               <GridList MainRoutes={KartotekaRoutes} navigate={navigate}/>
            </ScrollView>
        );
    }
}
