import React, { Component } from 'react'
import { WrapperHeader, Wrapper } from '../styled-components/Wrapper'
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


const WebViewExample = () => {
      const { search, icon, video } = styles;
   return (
      <Wrapper>
      <WrapperHeader>
        <Icon
          containerStyle={icon}
          name='chevron-left'
          type='font-awesome'
          color='#fff'
          size={32}
          onPress={()=>props.navigation.goBack()}
        />
        <Text style={search}>Probni Link </Text>
          </WrapperHeader>
         <View style = {{flex:1}}>
         <WebView
            style={video}
            source = {{ uri:
               'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=sirmiumerp' }}
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
        color: 'white'
      }
    });
export default WebViewExample;