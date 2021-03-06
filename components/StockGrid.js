import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { Icon, Button, ListItem } from "react-native-elements";
import { GridWrapper, GridText, GridMiniView } from "../styled-components/Grid";
import {
  TitleText,
  WrapperHeader,
  Wrapper
} from "../styled-components/Wrapper";
import { getData } from "../helpers/index";
import Header from "../reusable-components/Header";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";

export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const url = `http://212.200.54.246:5001/api/StockTotal/GetStockTotalsByPagesForMobile?companyId=1`;
    getData(url)
      .then(data => {
        this.setState({ data });
      })
      .catch(err => console.log(err));
  }
  render() {
    let Ids = this.state.data.map(item => item.ProductCode);
    const num = this.state.data.length;
    const { navigate, goBack } = this.props.navigation;
    const tableHead = ["Sifra", "Artikal", "Kom.", "Tezina", "Detalji"];
    const tableData = [
      this.state.data.map(item => item.ProductCode),
      this.state.data.map(item => item.ProductName),
      this.state.data.map(item => item.Quantity),
      this.state.data.map(item => item.Weight.toFixed(2)),
      Array(num)
        .fill(9)
        .map((item, i) => (
          <Icon
            name="play-circle-outline"
            color="lightgreen"
            onPress={() =>
              navigate("detailsArtikli", {
                url: `http://212.200.54.246:5001/api/StockItem/GetStockItemsByWarehouseAndProductForMobile?companyId=1&warehouseId=0&warehouseChamberId=0&productCode=${
                  Ids[i]
                }`
              })
            }
          />
        ))
    ];
    return (
      <View>
        <Header navigate={navigate} title={"Detalji-Lager"} goBack={goBack} />
        <View>
          <Table
            style={styles.table}
            borderStyle={{ borderWidth: 0.5, borderColor: "#c8e1ff" }}
          >
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.text}
              flexArr={[2, 4, 1, 2, 1]}
            />
            <ScrollView style={{ margin: 0, padding: 0 }}>
              <Cols
                data={tableData}
                textStyle={styles.text}
                flexArr={[2, 4, 1, 2, 1]}
              />
            </ScrollView>
          </Table>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: { width: "100%" },
  head: { height: 45, backgroundColor: "lightgreen" },
  text: {
    textAlign: "left",
    height: 45,
    paddingLeft: 3
  }
});
