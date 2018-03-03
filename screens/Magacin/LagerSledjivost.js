import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Card, List, ListItem, SearchBar, Icon } from 'react-native-elements';
import { WrapperHeader, Wrapper } from '../../styled-components/Wrapper'
import Activity from '../../components/ActivityIndicator';
import ListItems from '../../components/WarehouseItem2';
import { getData, filterData } from '../../helpers/index';
import { data } from '../../helpers/Data';
import { Dropdown } from 'react-native-material-dropdown'

export default class WarehouseScreen extends Component {
  constructor() {
    super();

    this.state = {
      data:[],
      search: '',
      refreshing: false,
      komore: false,
      komoreData: [],
      warehouseData: [],
      Wi: false,
      Ci: false,
      Wid: false,
      Cid: false
    };
    this.search = this.search.bind(this)
    this.handleRefresh = this.handleRefresh.bind(this)
    this.PickWarehouse = this.PickWarehouse.bind(this)
    this.PickChamber = this.PickChamber.bind(this)
  }
  PickWarehouse(value, i) {
   // console.log(value,i)
    let Wid = this.state.data[i].Id
    let Wi = i
    let komoreData = this.state.data[i].WarehouseChambers.length ?
      this.state.data[i].WarehouseChambers.map(item => ({'value': item.Code})) : [{'value': "Sve"}]
    let komore = komoreData.length ? true: false
      this.setState({komore, komoreData, Wid, Wi })
  }
  PickChamber(value,i) {
   // console.log(value,i)
      let Cid = value === 'Sve' ? '0'
      : this.state.data[this.state.Wi].WarehouseChambers[i].Id
    this.setState({ Cid })
  }

  search(e) {
    this.setState({search:e.nativeEvent.text})
  }

  componentDidMount() {
    getData(data.magacin.warehouse)
      .then(data => {
        const warehouseData = data.Warehouses.map(item=>({'value': item.WarehouseName}))
        this.setState({ data: data.Warehouses, refreshing: false, warehouseData })
      });

  }

  handleRefresh() {
    this.setState({ refreshing: true })
    getData(data.magacin.warehouse).then(data => {
      this.setState({ data: data.Warehouses, refreshing: false })
    })
  }
        render() {
          const rdy =  <Activity />
          const { navigate, goBack } = this.props.navigation;
          const { search, icon } = styles;
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
              {this.state.data.length < 1 && rdy}
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Dropdown
                  containerStyle={{width:'50%',paddingRight:15}}
                  label='Skladiste'
                  data={this.state.warehouseData}
                  onChangeText={this.PickWarehouse}
                />
                <Dropdown
                  containerStyle={{width:'30%',paddingLeft:15}}
                  label='Komora'
                  data={this.state.komoreData}
                  onChangeText={this.PickChamber}
                />
                </View>
              {this.state.Wid && this.state.Cid &&
              <ListItems navigate={navigate} Cid={this.state.Cid} Wid={this.state.Wid} />
               }
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
