import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../../reusable-components/Header";
import GridList from "../../reusable-components/GridLista";
import { ProizvodnjaRoutes } from "../../Config/index";

export default class ProductionDrawer extends Component {
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <ScrollView>
        <Header title={"Klanje"} navigate={navigate} goBack={goBack} />
        <GridList navigate={navigate} MainRoutes={ProizvodnjaRoutes} />
      </ScrollView>
    );
  }
}
