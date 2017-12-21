import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { Card, List, ListItem, SearchBar, Icon } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import AppSearch from '../../components/AppSearch';
import Activity from '../../components/ActivityIndicator';
import AnimalSubTypeItem from '../../components/AnimalSubTypeItem';
import { getData, filterData } from '../../helpers/index';
import { data } from '../../helpers/Data';
import { Constants } from 'expo'


class AnimalScreen extends Component {
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
    getData(data.kartoteka.subAnimal).then(data => {
      this.setState({ data: data.AnimalSubTypes, refreshing: false })

      console.log(data);
    });
  }
  handleRefresh() {
    this.setState({ refreshing: true })
    getData(data.kartoteka.subAnimal).then(data => {
      this.setState({ data: data.AnimalSubTypes, refreshing: false })
      console.log(data);
    })
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
          const { width, height } = Dimensions.get('window');
          const { navigate, goBack } = this.props.navigation;
          const { text, searchBar, search, list, icon, container, title } = styles;
            return (
              <View style={styles.container}>
              <View style={[title, {height: 50 }]}>
                <Icon
                  containerStyle={[icon, {width:width*(1/5), height: 50 }]}
                  name='chevron-left'
                  type='font-awesome'
                  color='#fff'
                  onPress={()=>goBack()}
                />
                <SearchBar
                  containerStyle={[search,{width:width*(4/5)}]}
                  round
                  lightTheme
                  onSubmitEditing={e=>this.search(e)}
                  placeholder='Type Here...'
                />
                
                </View>
                
              {this.state.data.length < 1 && rdy}
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <AnimalSubTypeItem data={item} />
                )}
                keyExtractor={item => item.Id}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
              />
            </View>
          );
        }
}

const styles = StyleSheet.create({
  icon: {
    alignSelf:'flex-start',
    margin:0,
    padding:0,
    backgroundColor:'#517fa4',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
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
    alignSelf:'flex-end',
    margin:0,
    padding:0,
    backgroundColor:'#517fa4',
    borderBottomWidth:0,
    borderTopWidth:0
  },
  list: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#C7BE9F'
  }
  });
export default AnimalScreen;
