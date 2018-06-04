import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Icon, Input, ListItem } from "react-native-elements";
import { Wrapper } from "../../styled-components/Wrapper";
import { getData } from "../../helpers/index";
import Header from "../../reusable-components/Header";

const URLmini = `http://212.200.54.246:5001/api/StockTraceability/GetTraceabilityByLotMobile?Lot=`;

export default class Sledjivost extends Component {
  state = {
    input: "",
    data: []
  };
  getValue = async input => {
    await this.setState({ input });
    console.log("tu sam", this.state.input);
    const data = await getData(`${URLmini}${this.state.input}`);
    await this.setState({ data });
    console.log(this.state.data, data);
  };
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <Wrapper>
        <Header title={"Sledjivost"} goBack={goBack} navigate={navigate} />
        <View style={{ width: "100%" }}>
          <Input
            placeholder="Uneti LOT: npr(RAS-00012)"
            leftIcon={<Icon name="menu" size={24} color="black" />}
            onSubmitEditing={e => this.getValue(e.nativeEvent.text)}
          />
          {!!this.state.data.length && (
            <FlatList
              style={{ width: "100%" }}
              data={this.state.data}
              renderItem={({ item }) => (
                <ListItem
                  leftAvatar={{
                    rounded: false,
                    source: require("../../assets/Icons/010-notepad.png")
                  }}
                  title={item.Item}
                  titleStyle={{ backgroundColor: "lightgrey" }}
                  subtitle={item.Description}
                  subtitleStyle={{ backgroundColor: "white" }}
                  bottomDivider={true}
                />
              )}
              keyExtractor={(item, i) => (item.Id ? item.Id : `item-${i}`)}
            />
          )
          //refreshing={data.refreshing || false}
          //onRefresh={handleRefresh}
          //onEndReached={handleLoadMore || null}
          //onEndReachedThreshold={0.5}
          }
        </View>
      </Wrapper>
    );
  }
}
