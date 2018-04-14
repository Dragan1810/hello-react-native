import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  WebView,
  Image,
  StyleSheet
} from "react-native";
import {
  WrapperHeader,
  TitleText,
  WrapperHeaderCentar
} from "../styled-components/Wrapper";
import { Card, List, ListItem, Button } from "react-native-elements";
import Header from "./Header";
import styled from "styled-components/native";

const img1 = require("../assets/logo2.png");
const img2 = require("../assets/petmb.jpg");
const img3 = require("../assets/dj2010.png");
const img4 = require("../assets/viber_image.jpg");

export default () => {
  return (
    <View style={{ paddingTop: 0, flexDirection: "row" }}>
      <View style={{}}>
        <Image
          source={img1}
          style={{
            width: 100,
            height: 200,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
            flex: 3
          }}
        />
      </View>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Button
          containerStyle={{
            padding: 0,
            marginBottom: 10,
            flexDirection: "row"
          }}
          onPress={() => navigate("Home")}
          buttonStyle={{
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: "#009688",
            width: "80%"
          }}
          title="Proizvodnja"
          disabled={false}
        />
        <Button
          containerStyle={{ padding: 0, margin: 0, flexDirection: "row" }}
          onPress={() => navigate("login")}
          buttonStyle={{
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            width: "80%"
          }}
          title="Finansije"
          disabled={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
