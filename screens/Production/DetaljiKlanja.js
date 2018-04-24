import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { Wrapper } from "../../styled-components/Wrapper";
import Header from "../../reusable-components/Header";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";
import HOC from "../../reusable-components/HOCbasic";

const DetaljiKlanja = ({
  data,
  title,
  handleRefresh,
  handleLoadMore,
  navigation: { goBack, navigate }
}) => (
  <Wrapper>
    <Header title={title} goBack={goBack} navigate={navigate} />
    <View style={{ width: "100%" }}>
      <ListItems data={data} />
      <Grid data={data.SlaughterItems} />
    </View>
  </Wrapper>
);

const Output = HOC(DetaljiKlanja, "Detalji Klanja");
export default Output;

const ListItems = ({ data }) => {
  const { basic } = styles;
  return (
    <Card title={data.Supplier}>
      <ListItem
        title={
          <View style={basic}>
            <Text>LOT prijema:</Text>
            <Text>{data.Lot}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Datum prijema:</Text>
            <Text>{data.SlaughterDate}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Vrsta zivotinje:</Text>
            <Text>{data.AnimalSubType}</Text>
          </View>
        }
        hideChevron={true}
      />
    </Card>
  );
};

const Grid = ({ data }) => {
  console.log("Grid-data", data);
  const tableHead = ["Redni br.", "Sifra", "Artikal", "Tezina"];
  const tableData = [
    data.map(item => item.OrderNumber),
    data.map(item => item.ProductCode),
    data.map(item => item.ProductName),
    data.map(item => item.Weight.toFixed(3))
  ];
  return (
    <View>
      <Table
        style={styles.table}
        borderStyle={{ borderWidth: 0.5, borderColor: "#c8e1ff" }}
      >
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.text}
          flexArr={[1, 1, 3, 1]}
        />
        <ScrollView style={{ margin: 0, padding: 0 }}>
          <Cols
            data={tableData}
            textStyle={styles.text}
            flexArr={[1, 1, 3, 1]}
          />
        </ScrollView>
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    alignSelf: "flex-start",
    margin: 0,
    padding: 0,
    backgroundColor: "#009688",
    height: 56
  },
  search: {
    flex: 3,
    alignSelf: "flex-end",
    margin: 0,
    padding: 0,
    backgroundColor: "#009688",
    borderBottomWidth: 0,
    borderTopWidth: 0
  },
  basic: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  table: { width: "100%" },
  head: { height: 45, backgroundColor: "#f1f8ff" },
  text: {
    textAlign: "left",
    height: 45,
    paddingLeft: 3
  }
});
