import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { Card, List, ListItem, SearchBar, Icon } from "react-native-elements";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Wrapper, WrapperHeader } from "../../../styled-components/Wrapper";
import Activity from "../../../components/ActivityIndicator";
import ListItems from "../../../components/PredhodnaKlanja/PreGovedaKlanja";
import { getData, filterData } from "../../../helpers/index";
import { data } from "../../../helpers/Data";

const { Pklanja: PreKlanja } = data.production.goveda;
export default class PKlanjeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: "",
      refreshing: false,
      noData: false,
      message: "",
      loaded: false
    };

    this.search = this.search.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    console.log(PreKlanja);
    getData(PreKlanja)
      .then(data => {
        !data.Success && this.setState({ message: data.Message });
        data.TotalItems === 0
          ? this.setState({ noData: true })
          : this.setState({ data: data.CowSlaughtersByPage });
      })
      .catch(err => console.log(err));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () =>
        getData(PreKlanja).then(data =>
          this.setState(
            { data: data.CowSlaughtersByPage, refreshing: false },
            () => this.setState({ loaded: true })
          )
        )
    );
  }

  async search(e) {
    await this.setState({ search: e.nativeEvent.text });
    const filteredData = filterData(this.state.data, this.state.search);
    await this.setState({ data: filterData });
  }

  render() {
    const rdy = this.state.noData ? (
      <Text style={{ textAlign: "center", paddingTop: 20 }}>
        Nema Podataka...
      </Text>
    ) : (
      <Activity />
    );
    const { navigate, goBack } = this.props.navigation;
    const { search, icon } = styles;
    return (
      <Wrapper>
        <WrapperHeader>
          <Icon
            containerStyle={icon}
            name="chevron-left"
            type="font-awesome"
            color="#fff"
            size={30}
            onPress={() => goBack()}
          />
          <SearchBar
            containerStyle={search}
            inputStyle={{ paddingTop: 5, paddingBottom: 5 }}
            round
            lightTheme
            onSubmitEditing={e => this.search(e)}
            placeholder="Type Here..."
          />
        </WrapperHeader>
        {/* {!this.state.loaded && rdy} */}
        {/* {!this.state.message && <Text>{this.state.message}</Text>} */}
        <FlatList
          style={{ width: "100%", padding: 0, margin: 0 }}
          data={this.state.data}
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
    alignSelf: "flex-start",
    margin: 0,
    paddingTop: 5,
    backgroundColor: "#009688"
  },
  search: {
    flex: 3,
    alignSelf: "flex-end",
    margin: 0,
    padding: 0,
    backgroundColor: "#009688",
    borderBottomWidth: 0,
    borderTopWidth: 0
  }
});

/*
n( (response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(`Fetch failed with code ${response.code}`)
                }
            })
            .then(json => {
                this.setState({data: json})
            })
            .catch(err => { console.log(`Something failed: ${err.message}`) };
    }
 */
