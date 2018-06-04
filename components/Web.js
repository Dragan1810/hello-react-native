import React, { Component } from "react";
import {
  WrapperHeader,
  Wrapper,
  TitleText
} from "../styled-components/Wrapper";
import { Card, List, ListItem, SearchBar, Icon } from "react-native-elements";
import { View, WebView, StyleSheet, Dimensions, Text } from "react-native";
import { withNavigation } from "react-navigation";
import Header from "../reusable-components/Header";

const { height: Dheight, width: Dwidth } = Dimensions.get("window");

const WebViewExample = ({ navigation: { goBack, navigate, state } }) => {
  const { video } = styles;
  const { uri, ime } = state.params;
  return (
    <Wrapper>
      <Header title={ime} navigate={navigate} goBack={goBack} />
      <View style={{ flex: 1 }}>
        <WebView style={video} source={{ uri }} />
      </View>
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  video: {
    height: Dheight,
    width: Dwidth,
    flex: 1
  }
});
export default WebViewExample;
