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
    const URLmini = `http://212.200.54.246:5001/api/InputNote/GetInputNotesForGroupedReportMobile?companyId=1`;
    let { od, doDate, sid, aid, said } = this.props.navigation.state.params;
    const OD = od ? `&dateFrom=${od}` : "";
    const DODATE = doDate ? `&dateTo=${doDate}` : "";
    const SID = sid || 0;
    const AID = aid || 0;
    const SAID = said || 0;
    const Uri = `${URLmini}${OD}${DODATE}&businessPartnerId=${SID}&animalTypeId=${AID}&animalSubTypeId=${SAID}`;
    getData(Uri).then(data => this.setState({ data }));
    console.log(Uri);
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
      </Wrapper>
    );
  }
}
