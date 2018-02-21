import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { Card, List, ListItem, SearchBar, Icon } from 'react-native-elements';
import { WrapperHeader, Wrapper, TitleText } from '../styled-components/Wrapper'
import Activity from './ActivityIndicator';
import { getData } from '../helpers/index'
import { Constants } from 'expo'


export default class CompanyScreen extends Component {
  constructor() {
    super()

    this.state = {
      data:[],
      refreshing: false
    };
  }
  componentDidMount() {
      console.log(this.props.navigation.state.params.code)
      let { code } = this.props.navigation.state.params
   // getData(`data.company.company${code}`).then(data => this.setState({ data: data.Companies }));
  }

    render() {
          const rdy =  <Activity />
          const { navigate, goBack } = this.props.navigation
          const { search, icon } = styles
            return (

        <Wrapper>
        <WrapperHeader>
            <Icon
              containerStyle={icon}
              name='chevron-left'
              type='font-awesome'
              color='#fff'
              size={32}
              onPress={()=>goBack(null)}
            />
            <TitleText style={search}>Nazad</TitleText>
        </WrapperHeader>
            {this.state.data.length < 1 && rdy}

        </Wrapper>

          );
        }
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
    search: {
        flex: 3,
        alignSelf:'center',
        justifyContent: 'center',
        color: 'white',
        paddingLeft: 20
    }
  });