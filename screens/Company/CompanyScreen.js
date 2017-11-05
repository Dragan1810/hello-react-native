import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem, SearchBar, Icon } from 'react-native-elements'; //gotovi UI elementi
import AppHeader from '../../components/AppHeader'; //custom reusable componenta koja se koristi u vise screenova
import AppSearch from '../../components/AppSearch';
import CompanyItem from '../../components/CompanyItem';
import { getData, filterData } from '../../helpers/index'; // funkcija koja fetchuje podatke iz apija
import { data } from '../../helpers/Data'; // podaci o apiju


class CompanyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {  //svi podaci o componenti koji ce se korstiti
      data: [],
      search: ''
    };

    this.search = this.search.bind(this);
  }
  componentDidMount() {
    getData(data.company.company).then(data => this.setState({ data }));
    // kada se dobije promise iz getData otpakuje se i prebaci u state componente
  }
  search(e){
    this.setState({search:e.nativeEvent.text})

  }

        render() {
          let data = this.state.data;
          if (this.state.data.length>1){
            const filteredData = filterData(this.state.data, this.state.search);
            data = filteredData;
          }
          const { width, height } = Dimensions.get('window'); //dimnenzije telefona za css
          const { navigate, goBack } = this.props.navigation; // prop iz navigacije
          const { text, searchBar } = styles; // css
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

              <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                  data={data}  // data objekat
                  renderItem={({ item }) => (  // for petlja koja prolazi kroz svaki objekat
                    <CompanyItem data={item} />
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

export default CompanyScreen;
