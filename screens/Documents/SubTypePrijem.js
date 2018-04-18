import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SearchBar, Icon, ListItem } from "react-native-elements";
import { Wrapper } from "../../styled-components/Wrapper";
import Activity from "../../components/ActivityIndicator";
import ListItems from "../../components/InputNoteItem";
import { getData } from "../../helpers/index";
import Header from "../../reusable-components/Header";
import HOC from "../../reusable-components/HOCbasic";
import Item from "../../reusable-components/ListItem";

const SubTypePrijem = ({
  data,
  title,
  handleRefresh,
  handleLoadMore,
  navigation: { goBack, navigate }
}) => (
  <Wrapper>
    <Header title={title} goBack={goBack} navigate={navigate} />
    <FlatList
      style={{ width: "100%" }}
      data={data}
      renderItem={({ item }) => (
        <Item
          item={item}
          routeData={{
            route: "simplePrijem",
            routeUrl: `http://212.200.54.246:5001/api/InputNote/GetInputNoteForMobile?Id=`,
            prop: "InputNoteId",
            name: null
          }}
        />
      )}
      keyExtractor={(item, i) => (item.Id ? `${item.Id}` : `item-${i}`)}
      refreshing={data.refreshing || false}
      onRefresh={handleRefresh}
      onEndReached={handleLoadMore || null}
      onEndReachedThreshold={0.5}
    />
  </Wrapper>
);

const Output = HOC(SubTypePrijem, "Ovo iz Route-name");
export default Output;

/*

export default class SubTypeScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: "",
      page: 1,
      refreshing: false
    };
    this.handleRefresh = this.handleRefresh.bind(this);
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

  render() {
    const { name } = this.props.navigation.state.params;
    const { navigate, goBack } = this.props.navigation;
    return (
      <Wrapper>
        <Header title={name} goBack={goBack} />
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


*/
