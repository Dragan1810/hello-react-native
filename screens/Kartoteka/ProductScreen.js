import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions, ActivityIndicator } from 'react-native';
import { Card, List, ListItem, SearchBar, Icon } from 'react-native-elements';
import { Wrapper, WrapperHeader } from '../../styled-components/Wrapper'
import AppHeader from '../../components/AppHeader';
import AppSearch from '../../components/AppSearch';
import Activity from '../../components/ActivityIndicator';
import ListItems from '../../components/ProductItem';
import { getData, filterData } from '../../helpers/index';
import { data } from '../../helpers/Data';
import { Constants } from 'expo'


class ProductScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: '',
      refreshing: false
    };

    this.search = this.search.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    getData(data.kartoteka.stock).then(data => {
      this.setState({ data: data.StockTotals })
    });
  }

  handleRefresh() {
    this.setState({
      refreshing: true
    }, ()=> getData(data.kartoteka.stock).then(dt => {
      this.setState({ data: data.StockTotals, refreshing: false })
    }))
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
          const { navigate, goBack } = this.props.navigation;
          const { search, icon } = styles;
          const rdy =  <Activity />

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
                style={{width:'100%'}}
                data={data}
                renderItem={({ item }) => (
                  <ListItems data={item} navigate={navigate} />
                )}
                keyExtractor={item => item.Product.Id}
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


export default ProductScreen;
