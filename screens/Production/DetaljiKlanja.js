import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { SearchBar, Icon, Card, ListItem } from "react-native-elements";
import { Wrapper, WrapperHeader } from "../../styled-components/Wrapper";
import Activity from "../../components/ActivityIndicator";
import { getData, filterData, newFilterData } from "../../helpers/index";
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

export default class SingleScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: "",
      refreshing: false
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  componentDidMount() {
    const { url } = this.props.navigation.state.params;
    console.log("ovde sam 1", url);
    getData(url)
      .then(data => this.setState({ data: [data] }))
      .catch(err => console.log(err));
    console.log(this.state.data);
  }

  handleRefresh() {
    const { url } = this.props.navigation.state.params;
    this.setState(
      {
        refreshing: true
      },
      () =>
        getData(url).then(data =>
          this.setState({
            data,
            refreshing: false,
            page: 1
          })
        )
    );
  }

  render() {
    const rdy = <Activity />;
    const { navigate, goBack } = this.props.navigation;
    const { search, icon } = styles;
    return (
      <Wrapper>
        <Header title={"Detalji Klanja"} goBack={goBack} />
        {!this.state.data.length && rdy}
        <FlatList
          style={{ width: "100%" }}
          data={this.state.data}
          renderItem={({ item }) => {
            return (
              <View>
                <ListItems data={item} />
                <Grid data={item.SlaughterItems} />
              </View>
            );
          }}
          keyExtractor={(item, i) => `${i}`}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </Wrapper>
    );
  }
}

const ListItems = ({ data }) => {
  console.log("ovde sam");
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
