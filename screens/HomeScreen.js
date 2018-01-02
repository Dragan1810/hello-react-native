import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Dimensions } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { Wrapper, WrapperHeader, TitleText } from '../styled-components/Wrapper'
import { Constants } from 'expo';
import { MainRoutes } from '../Config/index'

export default class HomeScreen extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let { navigate, goBack } = this.props.navigation
    let { button } = styles
    return (
      <Wrapper>
        <WrapperHeader>
        <Icon name='menu' color='#fff' onPress={() => alert()} />
        <TitleText>Glavni Meni</TitleText>
        <Icon name='home' color='#fff' onPress={() => goBack()} />
        </WrapperHeader>
        {MainRoutes.map((route, i) => {
          return (
            <View key={i}>
              <Button
               large
               title={route.title}
               borderRadius={40}
               containerViewStyle={ button }
               icon={{name: 'archive', type: 'entypo'}}
               onPress={()=> navigate(route.id)}
              />
            </View>
          )
          })}
      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 8,
    width: '25%'
  }
})