import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { Card, List, ListItem, SearchBar, Icon } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, WrapperHeader } from '../../../styled-components/Wrapper'
import Activity from '../../../components/ActivityIndicator';
import ListItems from '../../../components/PredhodnaKlanja/PrePigKlanja';
import { getData, filterData } from '../../../helpers/index';
import { data } from '../../../helpers/Data';

const { Pklanja: PreKlanja } = data.production.Pig
class CompanyScreen extends Component {
  constructor() {
    super();

    this.state = {
      data:[],
      search: '',
      refreshing: false,
      noData: false
    };

    this.search = this.search.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    getData(PreKlanja).then(data => {
      data.TotalItems === 0 ? this.setState({noData: true})
      : this.setState({ data: data.PigSlaughtersByPage })
    });
  }

  handleRefresh() {
    this.setState({
      refreshing: true
    }, ()=> getData(PreKlanja).then(data => this.setState({ data: data.PigSlaughtersByPage, refreshing: false })))
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
          const rdy =  this.state.noData ? <Text style={{textAlign:'center', paddingTop: 20}}>Nema Podataka...</Text> : <Activity />
          const { width, height } = Dimensions.get('window');
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
                style={{width:'100%'}}
                data={data}
                renderItem={({ item }) => (
                  <ListItems data={item} navigate={navigate} />
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
    title: {
      flexDirection:'row'
    },
    searchBar: {
      alignSelf: 'flex-start',
    },
    text: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 65
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

export default CompanyScreen;
