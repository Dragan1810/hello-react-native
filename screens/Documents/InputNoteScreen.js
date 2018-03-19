import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import { Wrapper, WrapperHeader } from "../../styled-components/Wrapper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Activity from "../../components/ActivityIndicator";
import ListItems from "../../components/InputNoteItem";
import { getData, filterData, newFilterData } from "../../helpers/index";
import DatePicker from "react-native-datepicker";
import Header from "../../reusable-components/Header";

export default class SingleScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: "",
      refreshing: false
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  componentDidMount() {
    const { url } = this.props.navigation.state.params;
    console.log("ovde sam 1", url);
    getData(url)
      .then(data => this.setState({ data: [data] }))
      .catch(err => console.log(err));
    console.log(this.state.data);
  }

  handleRefresh() {
    const { url } = this.props.navigation.state.params;
    this.setState(
      {
        refreshing: true
      },
      () =>
        getData(url).then(data =>
          this.setState({
            data,
            refreshing: false,
            page: 1
          })
        )
    );
  }

  render() {
    const rdy = <Activity />;
    const { navigate, goBack } = this.props.navigation;
    const { search, icon } = styles;
    return (
      <Wrapper>
        <Header title={"Danasnji Prijem"} goBack={goBack} />
        {!this.state.data.length && rdy}
        <FlatList
          style={{ width: "100%" }}
          data={this.state.data}
          renderItem={({ item }) => <ListItems data={item} />}
          keyExtractor={(item, i) => i}
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
