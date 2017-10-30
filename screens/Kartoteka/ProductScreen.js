import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem, SearchBar } from 'react-native-elements';
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
    console.log(this.state.data);
    // vidi errore
          const data = filterData(this.state.data,this.state.search);
          this.setState({data});
  }

        render() {
          const { width, height } = Dimensions.get('window');
          const { navigate } = this.props.navigation;
          const { text, searchBar } = styles;
            return (
              <View>
                <SearchBar
                  round
                  lightTheme
                  onSubmitEditing={e=>this.search(e)}
                  placeholder='Type Here...'
                />
              <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                  data={this.state.data}
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
