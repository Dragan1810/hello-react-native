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
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        onPress={()=> navigate('Home')}
                        backgroundColor='#009688'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Izaberi' />
                </Card>
                <Card
                    title='Pet MB Agrar d.o.o'
                    image={require('../../assets/logo2.png')}>
                    <Text style={{marginBottom: 10}}>
                        U izradi...
                    </Text>
                    <Button
                        icon={{name: 'code'}}
                        backgroundColor='#009688'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='U izradi...' />
                </Card>
                <Card
                    title='Djurdjevic 2010 d.o.o'
                    image={require('../../assets/logo2.png')}>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={{name: 'code'}}
                        backgroundColor='#009688'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='Djurdjevic Energo 2016 d.o.o'
                    image={require('../../assets/logo2.png')}>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={{name: 'code'}}
                        backgroundColor='#009688'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
                </Card>
            </ScrollView>
        );
    }
}
