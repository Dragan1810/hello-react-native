import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Dimensions } from 'react-native';
import { RkText, RkButton, RkStyleSheet } from 'react-native-ui-kitten';
import { Button } from 'react-native-elements'
import AppHeader from '../components/AppHeader';
import { Constants } from 'expo';
import { MainRoutes } from '../Config/index'

export default class HomeScreen extends Component {

  constructor(props){
    super(props)
  }
  render() {
    let { navigate } = this.props.navigation
    let { layout, button } = styles
    console.log(this.props.navigation.state.routeName)
    return (
      <View style={ layout }>
        <AppHeader navigation={this.props.navigation} title={'Glavni Meni'}/>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 85
  },
  button: {
    paddingTop: 8,
    width: 300
  }
})