import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, List, ListItem, Icon } from "react-native-elements";
import {
  Wrapper,
  WrapperHeader,
  TitleText
} from "../../styled-components/Wrapper";
import Header from "../../reusable-components/Header";
import GridList from "../../reusable-components/GridLista";
import { PrijemniceRoutes } from "../../Config/index";

export default class DocumentDrawer extends Component {
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <ScrollView>
        <Header title={"Prijem u Depo"} navigate={navigate} goBack={goBack} />
        <GridList MainRoutes={PrijemniceRoutes} navigate={navigate} />
      </ScrollView>
    );
  }
}
