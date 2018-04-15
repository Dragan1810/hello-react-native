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
import { Card, ListItem, Button } from "react-native-elements";
import Header from "./Header";
import styled from "styled-components/native";

const img1 = require("../assets/logo2.png");
const img2 = require("../assets/petmb.jpg");
const img3 = require("../assets/dj2010.png");
const img4 = require("../assets/viber_image.jpg");

const ImgWrapper = styled.View`
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
`;

export default class CompanySlot extends Component {
  render() {
    //const { navigate } = props;
    const { main, btnDiv } = styles;
    return (
      <View style={main}>
        <ImgWrapper>
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
        </ImgWrapper>
        <View style={btnDiv}>
          <ListDugme />
        </View>
      </View>
    );
  }
}

const ListDugme = props => {
  return <Dugme />;
};

const Dugme = props => {
  return (
    <Button
      containerStyle={{ padding: 0, marginBottom: 10, flexDirection: "row" }}
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
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 0,
    flexDirection: "row"
  },
  btnDiv: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});
