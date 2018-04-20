import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Card, List, ListItem, SearchBar, Icon } from "react-native-elements";
import { WrapperHeader, Wrapper } from "../../styled-components/Wrapper";
import Activity from "../../components/ActivityIndicator";
import ListItems from "../../components/WarehouseItem";
import { getData, filterData } from "../../helpers/index";
import { data } from "../../helpers/Data";
import { Dropdown } from "react-native-material-dropdown";
import Header from "../../reusable-components/Header";

export default class WarehouseScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: "",
      refreshing: false,
      komore: false,
      komoreData: [],
      warehouseData: [],
      Wi: false,
      Ci: false,
      Wid: false,
      Cid: false
    };
    this.handleRefresh = this.handleRefresh.bind(this);
    this.PickWarehouse = this.PickWarehouse.bind(this);
    this.PickChamber = this.PickChamber.bind(this);
  }
  PickWarehouse(value, i) {
    // console.log(value,i)
    let Wid = this.state.data[i].Id;
    let Wi = i;
    let komoreData = this.state.data[i].WarehouseChambers.length
      ? this.state.data[i].WarehouseChambers.map(item => ({
          value: item.Code
        })).concat([{ value: "Sve" }])
      : [{ value: "Sve" }];
    let komore = komoreData.length ? true : false;
    this.setState({ komore, komoreData, Wid, Wi });
  }
  PickChamber(value, i) {
    // console.log(value,i)
    let Cid =
      value === "Sve"
        ? "0"
        : this.state.data[this.state.Wi].WarehouseChambers[i].Id;
    this.setState({ Cid });
  }
  componentDidMount() {
    getData(data.magacin.warehouse).then(data => {
      const warehouseData = data.Warehouses.map(item => ({
        value: item.WarehouseName
      }));
      this.setState({
        data: data.Warehouses,
        refreshing: false,
        warehouseData
      });
    });
  }

  handleRefresh() {
    this.setState({ refreshing: true });
    getData(data.magacin.warehouse).then(data => {
      this.setState({ data: data.Warehouses, refreshing: false });
    });
  }
  render() {
    const rdy = <Activity />;
    const { navigate, goBack } = this.props.navigation;
    return (
      <Wrapper>
        <Header title={"Skladiste"} navigate={navigate} goBack={goBack} />
        {this.state.data.length < 1 && rdy}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Dropdown
            containerStyle={{ width: "50%", paddingRight: 15 }}
            label="Skladiste"
            data={this.state.warehouseData}
            onChangeText={this.PickWarehouse}
          />
          <Dropdown
            containerStyle={{ width: "30%", paddingLeft: 15 }}
            label="Komora"
            data={this.state.komoreData}
            onChangeText={this.PickChamber}
          />
        </View>
        {this.state.Wid &&
          this.state.Cid && (
            <ListItems
              navigate={navigate}
              Cid={this.state.Cid}
              Wid={this.state.Wid}
            />
          )}
      </Wrapper>
    );
  }
}
