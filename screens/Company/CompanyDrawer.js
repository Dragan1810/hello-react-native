import React, { Component, Fragment } from "react";
import { View, Text, ScrollView, WebView } from "react-native";
import { Wrapper } from "../../styled-components/Wrapper";
import { Card } from "react-native-elements";
import Header from "../../reusable-components/Header";
import CompanySlot from "../../reusable-components/CompanySlot";
import { CompanyListConfig } from "../../Config/index";

export const { Provider, Consumer } = React.createContext();

export default class CompanyDrawer extends Component {
  constructor() {
    super();
    this.state = { data: CompanyListConfig };
  }
  render() {
    return (
      <Fragment>
        <Header title={"Kompanije"} />
        <ScrollView>
          <Provider
            value={{
              state: this.state.data,
              navigate: this.props.navigation.navigate
            }}
          >
            <CompanySlot />
          </Provider>
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
          <Text>2.1.0</Text>
        </ScrollView>
      </Fragment>
    );
  }
}
