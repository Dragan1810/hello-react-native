import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Wrapper } from "../../styled-components/Wrapper";
import Activity from "../../components/ActivityIndicator";
import { getData } from "../../helpers/index";
import Header from "../../reusable-components/Header";
import Item from "../../reusable-components/ListItem";

const URL = `http://212.200.54.246:5001/api/WorkOrderAnimalInputNote/GetWorkOrdersForMobile?companyId=1`;
const URLmini = `http://212.200.54.246:5001/api/WorkOrderAnimalInputNote/GetWorkOrdersForMobile?companyId=1`;
export default class NalogPrijemScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      refreshing: false
    };
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }
  componentDidMount() {
    getData(URL)
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  }
  handleRefresh() {
    this.setState({ refreshing: true }, () =>
      getData(URL).then(data =>
        this.setState({
          data,
          refreshing: false,
          page: 1
        })
      )
    );
  }
  async handleLoadMore() {
    let { page } = this.state;
    page = page + 1;
    let Data = await getData(`${URLmini}&CurrentPage=${page}`);
    if (Data.length > 0) {
      let data = [...this.state.data, ...Data];
      await this.setState({ data, page });
    }
  }
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <Wrapper>
        <Header title={"Nalog za Prijem"} goBack={goBack} navigate={navigate} />
        <FlatList
          style={{ width: "100%" }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.Id}
          refreshing={this.state.refreshing}
        />
      </Wrapper>
    );
  }
}
