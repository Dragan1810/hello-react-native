import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native'
import { Icon, Card, ListItem, SearchBar } from 'react-native-elements'
import { GridWrapper,GridText, GridMiniView } from '../styled-components/Grid'
import { TitleText, WrapperHeader, Wrapper } from '../styled-components/Wrapper'
import Activity from './ActivityIndicator';
import { getData } from '../helpers/index'
import Header from '../reusable-components/Header'
import { format } from 'date-fns'

export default class Grid extends Component {
    constructor(){
        super()

        this.state = {
            data: []
        }
    }

    componentDidMount(){
        const { url } = this.props.navigation.state.params
        console.log(url)
        getData(url).then(data => {
         this.setState({ data })
         console.log(data.Stocks)
        })
            .catch(err => console.log(err))
    }
    render() {
        const { navigate, goBack } = this.props.navigation
        const { data } = this.state
        const { basic, icon, search } = styles
        const rdy = <Activity/>
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
              onSubmitEditing={e=>this.search(e)}
              placeholder='Type Here...'
            />

            </WrapperHeader>
              {this.state.data.length < 1 && rdy}
              <FlatList
                style={{width:'100%'}}
                data={data}
                renderItem={({ item }) => (
                  <ListItems data={item} />
                )}
                keyExtractor={(item,i) => i }
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
              />

            </Wrapper>
        )
    }
}
const ListItems = ({data}) => {
const { basic } = styles
    return (<Card title={data.ProductName}>
            <ListItem
                title={
                    <View style={basic}>
                        <Text>Sifra Artikla:</Text>
                        <Text>{data.ProductName}</Text>
                    </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={basic}>
                    <Text>Ukupna tezina:</Text>
                    <Text>{data.TotalWeight}</Text>
                </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                <View style={basic}>
                    <Text>Na stanju:</Text>
                    <Text>{data.TotalQuantity}</Text>
                </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                <View style={basic}>
                    <Text>Interna prijemnica:</Text>
                    <Text>{data.DocumentName.split(' ')[2]}</Text>
                </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                <View style={basic}>
                    <Text>Datum:</Text>
                    <Text>{format(data.StockChangeDate, 'DD/MM/YYYY')}</Text>
                </View>
                }
                hideChevron={true}
            />
            </Card>
    )
}

const styles = StyleSheet.create({
    basic: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
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
})