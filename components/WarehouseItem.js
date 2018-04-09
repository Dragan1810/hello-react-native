import React from "react";
import { StyleSheet, Text, FlatList, View, Dimensions } from "react-native";
import { Card, List, ListItem, Button } from "react-native-elements";
import { getData, ImgPicker } from "../helpers/index";

const urlMini = `http://212.200.54.246:5001/api/StockItem/GetStockItemsByWarehouseForMobile?companyId=1&`;
export default class WarehouseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Cid: this.props.Cid,
      Wid: this.props.Wid
    };
  }
  componentDidMount() {
    const { Cid, Wid } = this.state;
    const url = `${urlMini}warehouseId=${Wid}&warehouseChamberId=${Cid}`;
    console.log(url);
    getData(url).then(data => this.setState({ data }));
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.Cid !== nextProps.Cid) {
      this.setState({ Cid: nextProps.Cid, Wid: nextProps.Wid });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.Cid !== this.props.Cid) {
      const { Cid, Wid } = this.props;
      const url = `${urlMini}warehouseId=${Wid}&warehouseChamberId=${Cid}`;
      console.log("DONG");
      getData(url).then(data => this.setState({ data }));
    }
  }
  render() {
    console.log(this.state.Cid);
    return (
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
            />
          );
        }}
        keyExtractor={(item, i) => i}
      />
    );
  }
}

const styles = StyleSheet.create({
  basic: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
