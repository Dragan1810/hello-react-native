import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../components/AppHeader';
import AppSearch from '../components/AppSearch';
import { getData } from '../helpers/index';


class BoxScreen extends Component {
  constructor() {
    super();

    this.state = {
      data:[]
    };
  }

  componentDidMount() {
    getData().then(data => this.setState({ data }));
  }

        render() {
          const { width, height } = Dimensions.get('window');
          const { navigate } = this.props.navigation;
          const { text, searchBar } = styles;
            return (
              <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                  <BoxItem data={item} />
                )}
                keyExtractor={item => item.Id}
              />
            </List>
                
          );
        }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
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

export default BoxScreen;
