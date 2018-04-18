import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import Header from "../../reusable-components/Header";
import { Wrapper } from "../../styled-components/Wrapper";
import { getData } from "../../helpers/index";
import Item from "../../reusable-components/ListItem";

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
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item, i) => (item.Id ? `${item.Id}` : `item-${i}`)}
        />
      </Wrapper>
    );
  }
}
