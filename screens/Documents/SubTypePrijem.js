import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SearchBar, Icon, ListItem } from "react-native-elements";
import { Wrapper } from "../../styled-components/Wrapper";
import Activity from "../../components/ActivityIndicator";
import ListItems from "../../components/InputNoteItem";
import { getData } from "../../helpers/index";
import Header from "../../reusable-components/Header";

export default class SubTypeScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: "",
      page: 1,
      refreshing: false,
      date: "2018-01-01"
    };

    this.search = this.search.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }
  componentDidMount() {
    const URL = this.props.navigation.state.params.url;
    getData(URL)
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  }

  handleRefresh() {
    const URL = this.props.navigation.state.params.url;
    this.setState(
      {
        refreshing: true
      },
      () =>
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
    const { name } = this.props.navigation.state.params;
    const rdy = <Activity />;
    const { navigate, goBack } = this.props.navigation;
    return (
      <Wrapper>
        <Header title={name} goBack={goBack} />
        {this.state.data.length < 1 && rdy}
        <FlatList
          style={{ width: "100%" }}
          data={this.state.data}
          renderItem={({ item, index }) => {
            let img;
            switch (item.Image.split(".")[0]) {
              case "cow":
                img = require("../../assets/Icons/cow2.png");
                break;
              case "pig":
                img = require("../../assets/Icons/pig2.png");
                break;
              case "lamb":
                img = require("../../assets/Icons/lamb2.png");
                break;
              case "farmer":
                img = require("../../assets/Icons/farmer.png");
            }
            console.log(index);
            const show = index === 0 ? true : false;
            return (
              <ListItem
                roundAvatar
                avatarStyle={{ backgroundColor: "transparent" }}
                avatar={img}
                title={item.Item}
                subtitle={item.Description}
                onPressRightIcon={() =>
                  navigate("simplePrijem", {
                    url: `http://212.200.54.246:5001/api/InputNote/GetInputNoteForMobile?Id=${
                      item.InputNoteId
                    }`
                  })
                }
                hideChevron={show}
              />
            );
          }}
          keyExtractor={(item, i) => i}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </Wrapper>
    );
  }
}
