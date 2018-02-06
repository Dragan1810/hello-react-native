import React, { Component } from 'react'
import { WrapperHeader, Wrapper, TitleText } from '../styled-components/Wrapper'
import { Card, List, ListItem, SearchBar, Icon } from 'react-native-elements';
import {
   View,
   WebView,
   StyleSheet,
   Dimensions,
   Text
}
from 'react-native'
const {height: Dheight, width: Dwidth } = Dimensions.get('window')


const WebViewExample = ({ navigation }) => {
      const { search, icon, video } = styles
      const { uri, ime } = navigation.state.params
   return (
      <Wrapper>
      <WrapperHeader>
        <Icon
          containerStyle={icon}
          name='chevron-left'
          type='font-awesome'
          color='#fff'
          size={32}
          onPress={()=> navigation.goBack()}
        />
        <TitleText style={search}>{ime}</TitleText>
          </WrapperHeader>
         <View style = {{flex:1}}>
         <WebView
            style={video}
            source = {{ uri }}
         />
      </View>
        </Wrapper>


   )
}
const styles = StyleSheet.create({
      icon: {
        flex: 1,
        alignSelf:'flex-start',
        margin:0,
        padding:0,
        backgroundColor:'#009688',
        height: 56
      },
      video: {
            height: Dheight,
            width: Dwidth,
            flex: 1
          },
      search: {
        flex: 3,
        alignSelf:'center',
        justifyContent: 'center',
        color: 'white',
        paddingLeft: 20
      }
    });
export default WebViewExample;