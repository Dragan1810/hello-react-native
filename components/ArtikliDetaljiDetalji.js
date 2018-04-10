import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { Icon, Button, ListItem } from "react-native-elements";
import { GridWrapper, GridText, GridMiniView } from "../styled-components/Grid";
import {
  TitleText,
  WrapperHeader,
  Wrapper
} from "../styled-components/Wrapper";
import { getData, ImgPicker } from "../helpers/index";
import Header from "../reusable-components/Header";

export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const { url } = this.props.navigation.state.params;
    getData(url)
      .then(data => {
        this.setState({ data });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View>
        <Header navigate={navigate} title={"Detalji-Lager."} goBack={goBack} />
        <FlatList
          style={{ width: "100%" }}
          data={this.state.data}
          renderItem={({ item }) => {
            let img = ImgPicker(item);
            return (
              <ListItem
                roundAvatar
                avatar={img}
                title={item.Item}
                subtitle={item.Description}
                hideChevron={true}
              />
            );
          }}
          keyExtractor={(item, i) => i}
        />
      </View>
    );
  }
}
