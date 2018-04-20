import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Card, List, ListItem } from "react-native-elements";

export default class CompanyDrawer extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <List style={{ paddingTop: 65, marginTop: 0 }}>
          <TouchableOpacity onPress={() => navigate("businessPartner")}>
            <ListItem
              title={"Poslovni Partner"}
              leftIcon={{ name: "account-balance" }}
            />
          </TouchableOpacity>
        </List>
      </ScrollView>
    );
  }
}
