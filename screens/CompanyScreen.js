import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import AppHeader from '../components/AppHeader';
import AppSearch from '../components/AppSearch';
import { getData } from '../helpers/index';


class CompanyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
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
            <View style={{flex:1}}>
            <ScrollView contentContainerStyle={{flex:1}}>
            <View style={text}>
              <AppHeader navigate={navigate} />
              <View style={[searchBar, { width }]}>
                <AppSearch />

              {this.state.data.map(item => {
                return (
                  <Card title={item.CompanyName} key={item.Id}>
                    <List>
                          <ListItem
                            title={item.CompanyName}
                            leftIcon={{name: 'settings'}}
                          />
                          <ListItem
                            title={item.CompanyCode}
                            leftIcon={{name: 'settings'}}
                          />
                          <ListItem
                            title={item.Address}
                            leftIcon={{name: 'settings'}}
                          />
                          <ListItem
                            title={item.Email}
                            leftIcon={{name: 'settings'}}
                          />
                          <ListItem
                            title={item.IndustryName}
                            leftIcon={{name: 'settings'}}
                          />
                    </List>
                  </Card>
                )
              })}

              </View>
                <Text>Testing Company Screen(Or Loading....)</Text>
                </View>
            </ScrollView>
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

export default CompanyScreen;
