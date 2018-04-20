import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { Card, List, ListItem, SearchBar, Icon } from "react-native-elements";
import { WrapperHeader, Wrapper } from "../../styled-components/Wrapper";
import Activity from "../../components/ActivityIndicator";
import ListItems from "../../components/BoxItem";
import { getData, filterData } from "../../helpers/index";
import { data } from "../../helpers/Data";
import { OptimizedFlatList } from "react-native-optimized-flatlist";
var flattenObject = require("flatten-object");

const URLmini = "http://212.200.54.246:5001/api/Box/GetBoxes?CompanyId=1";

export default class BoxesScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: "",
      refreshing: false,
      loaded: false
    };
  }
  componentDidMount() {
    const { Id } = this.props.navigation.state.params;
    getData(`${URLmini}&DepotId=${Id}`)
      .then(data => this.setState({ data: data.Boxes }))
      .then(() => {
        this.setState({ loaded: true });
      });
  }

  render() {
    const rdy = <Activity />;
    const { navigate, goBack } = this.props.navigation;
    const { search, icon } = styles;
    const List = (
      <FlatList
        style={{ width: "100%" }}
        data={this.state.data}
        renderItem={({ item }) => <ListItems data={item} />}
        keyExtractor={item => item.Id}
      />
    );
    //    let data = this.state.loaded && this.state.data.map((item, i) => flattenObject(item, 0, '-'));
    return (
      <Wrapper>
        <WrapperHeader>
          <Icon
            containerStyle={icon}
            name="chevron-left"
            type="font-awesome"
            color="#fff"
            size={32}
            onPress={() => goBack()}
          />
          <SearchBar
            containerStyle={search}
            round
            lightTheme
            onSubmitEditing={e => this.search(e)}
            placeholder="Type Here..."
          />
        </WrapperHeader>
        {this.state.loaded ? List : rdy}
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    alignSelf: "flex-start",
    margin: 0,
    padding: 0,
    backgroundColor: "#009688",
    height: 56
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
