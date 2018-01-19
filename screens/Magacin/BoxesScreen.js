import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { Card, List, ListItem, SearchBar, Icon } from 'react-native-elements';
import { WrapperHeader, Wrapper } from '../../styled-components/Wrapper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import AppSearch from '../../components/AppSearch';
import Activity from '../../components/ActivityIndicator';
import ListItems from '../../components/BoxItem';
import { getData, filterData } from '../../helpers/index';
import { data } from '../../helpers/Data';
import { Constants } from 'expo'

const URLmini = 'http://212.200.54.246:5001/api/Box/GetBoxes?CompanyId=1';

export default class BoxesScreen extends Component {
  constructor() {
    super();

    this.state = {
      data:[],
      search: '',
      refreshing: false
    };
    this.search = this.search.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  search(e) {
    this.setState({search:e.nativeEvent.text})
  }

  handleRefresh() {
    this.setState({ refreshing: true })
    getData(`${URLmini}&DepotId=${Id}`).then(data => {
      this.setState({ data: data.Boxes, refreshing: false })
    })
  }

  componentDidMount() {
    const { Id } = this.props.navigation.state.params
    getData(`${URLmini}&DepotId=${Id}`).then(data => {
      this.setState({ data: data.Boxes, refreshing: false },()=> console.log(this.state.data))
    });
  }

        render() {

          let data = this.state.data;
          if (this.state.data.length>1){
            const filteredData = filterData(this.state.data, this.state.search);
            data = filteredData;
          }
          const rdy =  <Activity />
          const { navigate, goBack } = this.props.navigation;
          const { search, icon } = styles;
          console.log(data,this.props.navigation.state.params)
            return (

          <Wrapper>
          <WrapperHeader>
            <Icon
              containerStyle={icon}
              name='chevron-left'
              type='font-awesome'
              color='#fff'
              size={32}
              onPress={()=>goBack()}
            />
            <SearchBar
              containerStyle={search}
              round
              lightTheme
              onSubmitEditing={e=>this.search(e)}
              placeholder='Type Here...'
            />

              </WrapperHeader>
              {this.state.data.hasOwnProperty('AnimalSubType') ? rdy :
              <FlatList
                style={{width: '100%'}}
                data={data}
                renderItem={({ item }) => (
                  <ListItems data={item} />
                )}
                keyExtractor={item => item.Id}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
              />}
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
      alignSelf:'flex-end',
      margin:0,
      padding:0,
      backgroundColor:'#009688',
      borderBottomWidth:0,
      borderTopWidth:0
    }
  });
