import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SearchBar, Icon, ListItem } from "react-native-elements";
import { Wrapper, WrapperHeader } from "../../styled-components/Wrapper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Activity from "../../components/ActivityIndicator";
import ListItems from "../../components/InputNoteItem";
import { getData, filterData, newFilterData } from "../../helpers/index";
import DatePicker from "react-native-datepicker";

const URL = `http://212.200.54.246:5001/api/InputNote/GetInputNotesForMobile?companyId=1&currentPage=1`;
const URLmini = `http://212.200.54.246:5001/api/InputNote/GetInputNotesForMobile?companyId=1`;
export default class PrePrijemScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: "",
      page: 1,
      refreshing: false,
      date: "2018-01-01"
    };

    this.search = this.search.bind(this);
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

  async search(e) {
    await this.setState({ search: e.nativeEvent.text });
    getData(URLmini)
      .then(data => newFilterData(data, this.state.search))
      .then(data => this.setState({ data }));
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
    const rdy = <Activity />;
    const { navigate, goBack } = this.props.navigation;
    const { search, icon } = styles;
    return (
      <Wrapper>
        <WrapperHeader>
          <Icon
            containerStyle={icon}
            name="chevron-left"
            type="font-awesome"
            color="#fff"
            size={32}
            onPress={() => goBack()}
          />
          <SearchBar
            containerStyle={search}
            round
            lightTheme
            onSubmitEditing={e => this.search(e)}
            placeholder="Type Here..."
          />
        </WrapperHeader>
        {this.state.data.length < 1 && rdy}
        <FlatList
          style={{ width: "100%" }}
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              avatar={require(`../../assets/Icons/cow.png`)}
              key={item.Id}
              title={item.Item}
              subtitle={item.Description}
            />
          )}
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
  }
});

/*
 <DatePicker
          style={{ width: 200, paddingTop: 15 }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2018-01-01"
          maxDate="2025-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              backgroundColor: "white"
            }
          }}
          onDateChange={date => {
            this.setState({ date });
          }}
        />
*/
