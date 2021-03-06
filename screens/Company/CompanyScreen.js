import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Card, List, ListItem, SearchBar, Icon } from "react-native-elements";
import Activity from "../../components/ActivityIndicator";
import ListItems from "../../components/CompanyItem";
import { getData, filterData } from "../../helpers/index";
import { data } from "../../helpers/Data";
import { Constants } from "expo";

export default class CompanyScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: "",
      refreshing: false
    };

    this.search = this.search.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    getData(data.company.company).then(data =>
      this.setState({ data: data.Companies })
    );
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () =>
        getData(data.company.company).then(data =>
          this.setState({ data: data.Companies, refreshing: false })
        )
    );
  }

  search(e) {
    this.setState({ search: e.nativeEvent.text });
  }

  render() {
    const rdy = <Activity />;
    const { navigate, goBack } = this.props.navigation;
    const { text, searchBar, search, icon, container, title } = styles;
    return (
      <View style={[container]}>
        <View style={title}>
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
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <ListItems data={item} />}
          keyExtractor={item => item.Id}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </View>
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
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  title: {
    flexDirection: "row"
  },
  searchBar: {
    alignSelf: "flex-start"
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 65
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
