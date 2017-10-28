import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements'; //gotovi UI elementi
import AppHeader from '../../components/AppHeader'; //custom reusable componenta koja se koristi u vise screenova
import AppSearch from '../../components/AppSearch';
import CompanyItem from '../../components/CompanyItem'; 
import { getData } from '../../helpers/index'; // funkcija koja fetchuje podatke iz apija
import { data } from '../../helpers/Data'; // podaci o apiju


class CompanyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {  //svi podaci o componenti koji ce se korstiti
      data: []
    };
  }
  componentDidMount() {
    getData(data.company.company).then(data => this.setState({ data }));
    // kada se dobije promise iz getData otpakuje se i prebaci u state componente
  }

        render() {
          const { width, height } = Dimensions.get('window'); //dimnenzije telefona za css
          const { navigate } = this.props.navigation; // prop iz navigacije 
          const { text, searchBar } = styles; // css
            return (
              <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                  data={this.state.data}  // data objekat
                  renderItem={({ item }) => (  // for petlja koja prolazi kroz svaki objekat 
                    <CompanyItem data={item} />
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
