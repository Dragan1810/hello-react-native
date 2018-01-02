import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Dimensions, TouchableOpacity } from 'react-native'
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
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {MainRoutes.map((route, i) => {
          return (
            <TouchableOpacity key={i} style={[button]} onPress={()=> navigate(route.id)}>
              <Image
                source={route.icon}
              />
              <Text style={{textAlign: 'center'}}>Hi</Text>
            </TouchableOpacity>
          )
          })}
          </View>
      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 8,
    width: '33%',
    alignItems: 'center'
  }
})