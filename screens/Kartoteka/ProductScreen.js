import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem, SearchBar, Icon } from 'react-native-elements';
import AppHeader from '../../components/AppHeader';
import AppSearch from '../../components/AppSearch';
import ProductItem from '../../components/ProductItem';
import { getData, filterData } from '../../helpers/index';
import { data } from '../../helpers/Data';


class ProductScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: ''
    };

    this.search = this.search.bind(this);
  }
  componentDidMount() {
    getData(data.kartoteka.product).then(data => this.setState({ data }));
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
          const { width, height } = Dimensions.get('window');
          const { navigate, goBack } = this.props.navigation;
          const { text, searchBar } = styles;
            return (
              <View style={styles.container}>
              <View style={{flexDirection:'row'}}>
                <Icon
                  containerStyle={{width:width*(1/3),alignSelf:'flex-start',margin:0,padding:0,height:30}}
                  name='arrow-left'
                  type='font-awesome'
                  color='#517fa4'
                  onPress={()=>goBack()}
                />
                <SearchBar
                  containerStyle={{width:width*(2/3),alignSelf:'flex-end',margin:0,padding:0}}
                  round
                  lightTheme
                  onSubmitEditing={e=>this.search(e)}
                  placeholder='Type Here...'
                />
                
                </View>
                
              <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0,backgroundColor:'#C7BE9F' }}>
                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <ProductItem data={item} />
                  )}
                  keyExtractor={item => item.Id}
                />
              </List>
              </View>
          );
        }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    backgroundColor:'#C7BE9F',
    paddingTop: 20
  },
  searchBar: {
    alignSelf: 'flex-start',
    height: 100
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 65
  }
});

export default ProductScreen;
