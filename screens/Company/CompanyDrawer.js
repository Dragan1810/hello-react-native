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
} from "../../styled-components/Wrapper";
import { Card, List, ListItem, Button } from "react-native-elements";
import Header from "../../reusable-components/Header";
import styled from "styled-components/native";

const img1 = require("../../assets/logo2.png");
const img2 = require("../../assets/petmb.jpg");
const img3 = require("../../assets/dj2010.png");
const img4 = require("../../assets/viber_image.jpg");

export default class CompanyDrawer extends Component {
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <ScrollView>
        <Header title={"Kompanije"} />
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
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
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
        <View style={{ paddingTop: 0, flexDirection: "row" }}>
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
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
          <Image
            source={img2}
            style={{
              width: 100,
              height: 200,
              borderTopLeftRadius: 100,
              borderBottomLeftRadius: 100,
              flex: 3
            }}
          />
        </View>
        <View style={{ paddingTop: 0, flexDirection: "row" }}>
          <Image
            source={img3}
            style={{
              width: 100,
              height: 200,
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
              flex: 3
            }}
          />
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
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
        <View style={{ paddingTop: 0, flexDirection: "row" }}>
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
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
          <Image
            source={img4}
            style={{
              width: 100,
              height: 200,
              borderTopLeftRadius: 100,
              borderBottomLeftRadius: 100,
              flex: 3,
              overflow: "hidden"
            }}
          />
        </View>
        <Card title="HALAL Standard Djurdjevic">
          <View style={{ width: "100%", height: 200 }}>
            <WebView
              style={{ flex: 1 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsInlineMediaPlayback={true}
              source={{ uri: "https://www.youtube.com/embed/5VCzlBF6_uI" }}
            />
          </View>
        </Card>
        <Text>2.01</Text>
      </ScrollView>
    );
  }
}

/*

import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  WebView
} from "react-native";
import {
  WrapperHeader,
  TitleText,
  WrapperHeaderCentar
} from "../../styled-components/Wrapper";
import { Card, List, ListItem, Button } from "react-native-elements";
import Header from "../../reusable-components/Header";

export default class CompanyDrawer extends Component {
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <ScrollView>
        <WrapperHeaderCentar>
          <TitleText>Kompanije</TitleText>
        </WrapperHeaderCentar>
        <Card
          title="SZTR Djurdjevic"
          image={require("../../assets/logo2.png")}
          wrapperStyle={{ padding: 0 }}
        >
          <View style={{ flexDirection: "row" }}>
            <Button
              onPress={() => navigate("Home")}
              buttonStyle={{
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                width: 160,
                backgroundColor: "#009688"
              }}
              containerStyle={{ flex: 1 }}
              title="Proizvodnja"
              disabled={false}
            />
            <Button
              onPress={() => navigate("login")}
              buttonStyle={{
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                width: 160
              }}
              containerStyle={{ flex: 1 }}
              title="Finansije"
              disabled={false}
            />
          </View>
        </Card>
        <Card
          title="Pet MB Agrar d.o.o"
          image={require("../../assets/petmb.jpg")}
          imageStyle={{ height: 210 }}
        >
          <Button
            onPress={() => navigate("PetMB")}
            title="Proizvodnja"
            buttonStyle={{
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: "#009688"
            }}
          />
        </Card>
        <Card
          title="Djurdjevic 2010 d.o.o"
          image={require("../../assets/dj2010.png")}
        >
          <Button
            onPress={() => navigate("Dju2010")}
            buttonStyle={{
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: "#009688"
            }}
            title="Proizvodnja"
          />
        </Card>
        <Card
          title="Djurdjevic Energo 2016 d.o.o"
          image={require("../../assets/viber_image.jpg")}
        >
          <Text style={{ marginBottom: 10 }} />
          <Button
            onPress={() => navigate("HomeEnergo")}
            buttonStyle={{
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: "#009688"
            }}
            title="Proizvodnja"
          />
        </Card>
        <Card title="HALAL Standard Djurdjevic">
          <View style={{ width: "100%", height: 200 }}>
            <WebView
              style={{ flex: 1 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsInlineMediaPlayback={true}
              source={{ uri: "https://www.youtube.com/embed/5VCzlBF6_uI" }}
            />
          </View>
        </Card>
        <Text>1.27</Text>
      </ScrollView>
    );
  }
}


*/
