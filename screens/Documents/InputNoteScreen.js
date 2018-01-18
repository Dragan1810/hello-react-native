import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { Wrapper, WrapperHeader } from '../../styled-components/Wrapper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Activity from '../../components/ActivityIndicator';
import ListItems from '../../components/InputNoteItem';
import { getData } from '../../helpers/index';

const URL = `http://212.200.54.246:5001/api/InputNote/GetInputNotesByPage?CompanyId=1&CurrentPage=1&ItemsPerPage=5`
const URLmini = `http://212.200.54.246:5001/api/InputNote/GetInputNotesByPage?CompanyId=1`
export default class StockScreen extends Component {
  constructor() {
    super();

    this.state = {
      data:[],
      search: '',
      page: 1,
      refreshing: false
    };

    this.search = this.search.bind(this)
    this.handleRefresh = this.handleRefresh.bind(this)
    this.handleLoadMore = this.handleLoadMore.bind(this)
  }

  componentDidMount() {
    getData(URL).then(data => this.setState({ data: data.InputNotesByPage }))
                .catch(err=> console.log(err))
  }

  handleRefresh() {
    this.setState({
      refreshing: true
    }, ()=> getData(URL).then(data => this.setState({ data: data.InputNotesByPage, refreshing: false })))
  }

  search(e) {
    this.setState({search:e.nativeEvent.text},
    ()=> getData(`${URLmini}&CurrentPage=1&ItemsPerPage=20&ProductName=${this.state.search}`)
        .then(data => this.setState({data : data.InputNotesByPage })))
  }

  async handleLoadMore(){
    let { page } = this.state
    page = page + 1;

    await this.setState({ page })

    let Data = await getData(`${URLmini}&CurrentPage=${this.state.page}&ItemsPerPage=5`)
          console.log(Data.InputNotesByPage[0], this.state.page);
          let data = [...this.state.data, ...Data.InputNotesByPage]
          await this.setState({ data })


  }

        render() {
          const rdy =  <Activity />
          const { navigate, goBack } = this.props.navigation;
          const { search, icon } = styles;
            return (

            <Wrapper>
            <WrapperHeader>
            <Icon
              containerStyle={icon}
              name='chevron-left'
              type='font-awesome'
              color='#fff'
              size={32}
              onPress={()=>goBack()}
            />
            <SearchBar
              containerStyle={search}
              round
              lightTheme
              placeholder='Type Here...'
            />

              </WrapperHeader>
              {this.state.data.length < 1 && rdy}
              <FlatList
                style={{width:'100%'}}
                data={this.state.data}
                renderItem={({ item }) => (
                  <ListItems data={item} />
                )}
                keyExtractor={item => item.Id}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
              />
              </Wrapper>

          );
        }
}

const styles = StyleSheet.create({
    icon: {
      flex: 1,
      alignSelf:'flex-start',
      margin:0,
      padding:0,
      backgroundColor:'#009688',
      height: 56
    },
    search: {
      flex: 3,
      alignSelf:'flex-end',
      margin:0,
      padding:0,
      backgroundColor:'#009688',
      borderBottomWidth:0,
      borderTopWidth:0
    }
  });
