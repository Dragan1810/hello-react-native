import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {
  Card,
  List,
  ListItem,
  SearchBar,
  Icon,
  Button
} from "react-native-elements";
import {
  WrapperHeader,
  Wrapper,
  TitleText
} from "../../styled-components/Wrapper";
import Activity from "../../components/ActivityIndicator";
import ListItems from "../../components/WarehouseItem";
import { getData, filterData } from "../../helpers/index";
import { data } from "../../helpers/Data";
import { Dropdown } from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";
import Header from "../../reusable-components/Header";

const DobavljaciURL = `http://212.200.54.246:5001/api/BusinessPartner/GetBusinessPartnersInInputNotesForMobile?companyId=1`;
const AnimalURL = `http://212.200.54.246:5001/api/AnimalType/GetAnimalTypesForMobile?companyId=1`;
const SubAnimalURLmini = `http://212.200.54.246:5001/api/AnimalSubType/GetAnimalSubTypesForMobile?companyId=1&animalTypeId=`;

export default class PretragaScreen extends Component {
  constructor() {
    super();

    this.state = {
      dobavljaci: [],
      dobavljaciName: [],
      animalName: [],
      animal: [],
      subAnimal: [],
      subAnimalName: [],
      od: null,
      do: null,
      Sid: null,
      Aid: null,
      SAid: null,
      show: false
    };
    this.PickSupplier = this.PickSupplier.bind(this);
    this.PickAnimal = this.PickAnimal.bind(this);
    this.PickSubAnimal = this.PickSubAnimal.bind(this);
  }
  PickSupplier(value, i) {
    const Sid = this.state.dobavljaci[i].Id;
    this.setState({ Sid });
  }
  PickAnimal(value, i) {
    const Aid = this.state.animal[i].Id;
    getData(`${SubAnimalURLmini}${Aid}`).then(data =>
      this.setState({
        subAnimal: data,
        subAnimalName: data.map(item => ({ value: item.Name }))
      })
    );
    this.setState({ Aid });
  }
  PickSubAnimal(value, i) {
    const SAid = this.state.subAnimal[i].Id;
    this.setState({ SAid });
  }
  componentDidMount() {
    getData(DobavljaciURL).then(data =>
      this.setState({
        dobavljaci: data,
        dobavljaciName: data.map(item => ({ value: item.Name }))
      })
    );
    getData(AnimalURL).then(data =>
      this.setState({
        animal: data,
        animalName: data.map(item => ({ value: item.Name }))
      })
    );
  }
  render() {
    const rdy = <Activity />;
    const { navigate, goBack } = this.props.navigation;
    const { search, icon } = styles;
    return (
      <Wrapper>
        <Header title={"Pretraga"} goBack={goBack} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10
          }}
        >
          <DatePicker
            style={{ width: 150 }}
            date={this.state.od}
            mode="date"
            placeholder="Od: "
            format="YYYYMMDD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={od => {
              this.setState({ od: `${od}000000` });
            }}
          />
          <DatePicker
            style={{ width: 150, marginLeft: 15 }}
            date={this.state.do}
            mode="date"
            placeholder="Do: "
            format="YYYYMMDD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={doDate => {
              this.setState({ do: `${doDate}000000` });
            }}
          />
        </View>
        <Dropdown
          containerStyle={{ width: "80%" }}
          label="Dobavljac"
          data={this.state.dobavljaciName}
          onChangeText={this.PickSupplier}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Dropdown
            containerStyle={{ width: "45%", paddingRight: 15 }}
            label="Zivotinja"
            data={this.state.animalName}
            onChangeText={this.PickAnimal}
          />
          <Dropdown
            containerStyle={{ width: "35%", paddingLeft: 15 }}
            label="Tip"
            data={this.state.subAnimalName}
            onChangeText={this.PickSubAnimal}
          />
        </View>
        <Button
          title="Trazi"
          icon={<Icon name="search" size={15} color="white" />}
          onPress={() =>
            navigate("showPretraga", {
              do: this.state.do,
              od: this.state.od,
              sid: this.state.Sid,
              aid: this.state.Aid,
              said: this.state.SAid
            })
          }
        />
      </Wrapper>
    );
  }
}
//
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
    paddingBottom: 12,
    backgroundColor: "#009688"
  }
});

class Rezultat extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const { od, doDate, sid, aid, said } = this.props;
    const Uri = `http://212.200.54.246:5001/api/InputNote/GetInputNotesForGroupedReportMobile?companyId=1&dateFrom=20180312000000&dateTo=20180314000000&businessPartnerId=0&animalTypeId=0/animalSubTypeId=0`;
    getData(Uri).then(data => this.setState({ data }));
  }
  render() {
    return (
      <FlatList
        style={{ width: "100%" }}
        data={this.state.data}
        renderItem={({ item }) => {
          let img;
          switch (item.Image.split(".")[0]) {
            case "cow":
              img = require("../../assets/Icons/cow2.png");
              break;
            case "pig":
              img = require("../../assets/Icons/pig2.png");
              break;
            case "lamb":
              img = require("../../assets/Icons/lamb2.png");
          }
          return (
            <ListItem
              roundAvatar
              avatar={img}
              title={item.Item}
              subtitle={item.Description}
            />
          );
        }}
        keyExtractor={(item, i) => i}
      />
    );
  }
}
