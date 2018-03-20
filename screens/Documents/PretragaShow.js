import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import Header from "../../reusable-components/Header";
import { Wrapper } from "../../styled-components/Wrapper";
import { getData } from "../../helpers/index";

export default class Rezultat extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    let { od, doDate, sid, aid, said } = this.props.navigation.state.params;
    let od = od || "";
    let doDate = doDate || "";
    const Uri = `http://212.200.54.246:5001/api/InputNote/GetInputNotesForGroupedReportMobile?companyId=1&dateFrom=20180312000000&dateTo=20180314000000&businessPartnerId=0&animalTypeId=0/animalSubTypeId=0`;
    getData(Uri).then(data => this.setState({ data }));
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Wrapper>
        <Header title={"Pretraga"} goBack={goBack} />
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
                break;
              case "all":
                img = require("../../assets/Icons/004-all.png");
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
      </Wrapper>
    );
  }
}
