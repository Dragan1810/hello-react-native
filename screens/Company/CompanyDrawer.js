import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { WrapperHeader, TitleText, WrapperHeaderCentar } from '../../styled-components/Wrapper'
import { Card, List, ListItem, Button } from 'react-native-elements';
import Header from '../../reusable-components/Header'


export default class CompanyDrawer extends Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <ScrollView>
                <WrapperHeaderCentar>
                    <TitleText>Kompanije</TitleText>
                </WrapperHeaderCentar>
               <Card
                    title='SZTR Djurdjevic'
                    image={require('../../assets/logo2.png')}>
                    <Text style={{marginBottom: 10}}>
                    </Text>
                    <Button
                        onPress={()=> navigate('Home')}
                        backgroundColor='#009688'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Izaberi' />
                </Card>
                <Card
                    title='Pet MB Agrar d.o.o'
                    image={require('../../assets/petmb.jpg')}
                    imageStyle={{height: 210}}
                    >
                    <Text style={{marginBottom: 10}}>
                    </Text>
                    <Button
                        onPress={()=> navigate('PetMB')}
                        backgroundColor='#009688'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Izaberi' />
                </Card>
                <Card
                    title='Djurdjevic 2010 d.o.o'
                    image={require('../../assets/dj2010.png')}>
                    <Text style={{marginBottom: 10}}>
                    </Text>
                    <Button
                        onPress={()=> navigate('Dju2010')}
                        backgroundColor='#009688'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Izaberi' />
                </Card>
                <Card
                    title='Djurdjevic Energo 2016 d.o.o'
                    image={require('../../assets/energ.png')}>
                    <Text style={{marginBottom: 10}}>
                    </Text>
                    <Button
                        onPress={()=> navigate('HomeEnergo')}
                        backgroundColor='#009688'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Izaberi' />
                </Card>
            </ScrollView>
        );
    }
}
