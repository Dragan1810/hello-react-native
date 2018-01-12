import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions, TouchableOpacity } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { Wrapper, WrapperHeader, TitleText } from '../styled-components/Wrapper'
import { Constants } from 'expo';
import { MainRoutes } from '../Config/index'
import Image from 'react-native-remote-svg'

export default class HomeScreen extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let { navigate, goBack } = this.props.navigation
    let { div } = styles
    return (
      <Wrapper>
        <WrapperHeader>
        <Icon name='menu' color='#fff' onPress={() => alert()} />
        <TitleText>Glavni Meni</TitleText>
        <Icon name='home' color='#fff' onPress={() => goBack()} />
        </WrapperHeader>

        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
        {MainRoutes.map((route, i) => {
          return (
            <TouchableOpacity key={i} style={[div]} onPress={()=> navigate(route.id)}>
              <Image
                style={{width:50,height:50}}
                source={route.icon}
              />
              <Text style={{textAlign: 'center',paddingTop: 8, fontWeight: 'bold'}}>{route.title}</Text>
            </TouchableOpacity>
          )
          })}
          </View>
      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  div: {
    borderRadius:12,
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: '27%',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10
  }
})