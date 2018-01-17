import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { Card, List, ListItem, SearchBar, Icon } from 'react-native-elements';
import { Wrapper, WrapperHeader } from '../../styled-components/Wrapper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Activity from '../../components/ActivityIndicator';
import ListItems from '../../components/StockItem';
import { getData, filterData } from '../../helpers/index';
import { data } from '../../helpers/Data';

const URL = `http://212.200.54.246:5001/api/Product/GetProductsByPage?CompanyId=1&CurrentPage=1&ItemsPerPage=20`
export default class StockScreen extends Component {
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

  componentDidMount() {
    getData(URL).then(data => this.setState({ data: data.Stocks }));
  }

  handleRefresh() {
    this.setState({
      refreshing: true
    }, ()=> getData(data.kartoteka.stock).then(data => this.setState({ data: data.Stocks, refreshing: false })))
  }

  search(e) {
    this.setState({search:e.nativeEvent.text})
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
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <ListItems data={item} />
                )}
                keyExtractor={item => item.Id}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
              />
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
