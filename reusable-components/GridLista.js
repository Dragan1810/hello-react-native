import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions, TouchableOpacity } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { Wrapper, WrapperHeader, TitleText, Kocka, KockaText, KockaImage, KockaWrapper } from '../styled-components/Wrapper'


const GridList = ({MainRoutes, navigate}) => (
    <KockaWrapper>
        {MainRoutes.map((route, i) => {
          return (
            <Kocka key={i} onPress={()=> navigate(route.id, {uri: route.uri, ime: route.title})}>
              <KockaImage source={route.icon} />
              <KockaText>{route.title}</KockaText>
            </Kocka>
          )
          })}
          </KockaWrapper>
)

export default GridList