import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions, ActivityIndicator } from 'react-native';
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
      search: '',
      refreshing: false
    };

    this.search = this.search.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    getData(data.kartoteka.product).then(data => this.setState({ data }));
  }

  handleRefresh() {
    this.setState({
      refreshing: true
    }, ()=> getData(data.kartoteka.product).then(data => this.setState({ data, refreshing: false })))
  }

  search(e) {
    this.setState({search:e.nativeEvent.text})
  }

        render() {
          const { width, height } = Dimensions.get('window');
          const { navigate } = this.props.navigation;
          const { text, searchBar } = styles;
          const rdy =  <ActivityIndicator
                            animating={true}
                            style={styles.indicator}
                            size="large"
                        />

            return (
              <View>
                <SearchBar
                  round
                  lightTheme
                  onSubmitEditing={e=>this.search(e)}
                  placeholder='Type Here...'
                />
                {this.state.data.length < 1 && rdy}
              <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                  data={this.state.data}
                  renderItem={({ item }) => (
                    <ProductItem data={item} />
                  )}
                  keyExtractor={item => item.Id}
                  refreshing={this.state.refreshing}
                  onRefresh={this.handleRefresh}
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
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    paddingTop:40,
  }
});

export default ProductScreen;
