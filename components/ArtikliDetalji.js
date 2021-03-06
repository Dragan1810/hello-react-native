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
        <Header navigate={navigate} title={"Detalji-Lager"} goBack={goBack} />
        <FlatList
          style={{ width: "100%" }}
          data={this.state.data}
          renderItem={({ item }) => {
            let img = ImgPicker(item);
            show = item.Image.split(".")[0] === "all" ? true : false;
            return (
              <ListItem
                roundAvatar
                avatar={img}
                title={item.Item}
                subtitle={item.Description}
                hideChevron={show}
                onPressRightIcon={() =>
                  navigate("LagerDetaljiDetalji", {
                    url: `http://212.200.54.246:5001/api/StockItem/GetStockItemDetailssByWarehouseAndProductForMobile?companyId=1&warehouseId=${
                      item.WarehouseId
                    }&warehouseChamberId=${
                      item.WarehouseChamberId
                    }&productCode=${item.ProductCode}`
                  })
                }
              />
            );
          }}
          keyExtractor={(item, i) => i}
        />
      </View>
    );
  }
}
