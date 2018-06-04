import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { Card, List, ListItem, SearchBar, Icon } from "react-native-elements";
import {
  WrapperHeader,
  Wrapper,
  TitleText
} from "../styled-components/Wrapper";
import Activity from "./ActivityIndicator";
import { getData } from "../helpers/index";
import { Constants } from "expo";

const URLmini =
  "http://212.200.54.246:5001/api/StockTraceability/GetTraceabilityByBarcodeMobile?Barcode=";

export default class CompanyScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      refreshing: false
    };
  }
  componentDidMount() {
    console.log(this.props.navigation.state.params.code);
    let { code } = this.props.navigation.state.params;
    getData(`${URLmini}${code}`).then(data => this.setState({ data }));
  }

  render() {
    const rdy = <Activity />;
    const { navigate, goBack } = this.props.navigation;
    const { search, icon } = styles;
    return (
      <Wrapper>
        <Header title={"Sledjivost"} goBack={goBack} navigate={navigate} />
        <View style={{ width: "100%" }}>
          {!!this.state.data.length && (
            <FlatList
              style={{ width: "100%" }}
              data={this.state.data}
              renderItem={({ item }) => (
                <ListItem
                  leftAvatar={{
                    rounded: false,
                    source: require("../assets/Icons/010-notepad.png")
                  }}
                  title={item.Item}
                  titleStyle={{ backgroundColor: "lightgrey" }}
                  subtitle={item.Description}
                  subtitleStyle={{ backgroundColor: "white" }}
                  bottomDivider={true}
                />
              )}
              keyExtractor={(item, i) => (item.Id ? item.Id : `item-${i}`)}
            />
          )}
        </View>
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
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
    paddingLeft: 20
  }
});
