import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Wrapper } from "../../styled-components/Wrapper";
import Activity from "../../components/ActivityIndicator"; // spiner
import { data } from "../../helpers/Data";
import Header from "../../reusable-components/Header";
import Item from "../../reusable-components/ListItem";
import HOC from "../../reusable-components/HOCbasic";

const PredhodniPrijem = ({
  data,
  title,
  handleRefresh,
  handleLoadMore,
  navigation: { goBack, navigate }
}) => (
  <Wrapper>
    <Header title={title} goBack={goBack} navigate={navigate} />
    <FlatList
      style={{ width: "100%" }}
      data={data}
      renderItem={({ item }) => (
        <Item
          item={item}
          routeData={{
            route: "simplePrijem",
            routeUrl:
              "http://212.200.54.246:5001/api/InputNote/GetInputNoteForMobile?Id=",
            prop: "Id"
          }}
        />
      )}
      keyExtractor={item => `${item.Id}`}
      refreshing={data.refreshing || false}
      onRefresh={handleRefresh}
      onEndReached={handleLoadMore || null}
      onEndReachedThreshold={0.5}
    />
  </Wrapper>
);

const Output = HOC(
  PredhodniPrijem,
  "Prethodni Prijem",
  data.documents.predhodniPrijem
);
export default Output;

/*
class OldPredhodniPrijem extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      refreshing: false
    };
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }
  componentDidMount() {
    getData(URL)
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  }
  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () =>
        getData(URL).then(data =>
          this.setState({
            data,
            refreshing: false,
            page: 1
          })
        )
    );
  }
  async handleLoadMore() {
    let { page } = this.state;
    page = page + 1;
    let Data = await getData(`${URLmini}&CurrentPage=${page}`);
    if (Data.length > 0) {
      let data = [...this.state.data, ...Data];
      await this.setState({ data, page });
    }
  }
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <Wrapper>
        <Header
          title={"Predhodni Prijem"}
          goBack={goBack}
          navigate={navigate}
        />
        <FlatList
          style={{ width: "100%" }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.Id}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </Wrapper>
    );
  }
}
*/
