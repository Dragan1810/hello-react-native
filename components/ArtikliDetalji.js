import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import { GridWrapper,GridText, GridMiniView } from '../styled-components/Grid'
import { TitleText, WrapperHeader, Wrapper } from '../styled-components/Wrapper'
import { getData } from '../helpers/index'
import Header from '../reusable-components/Header'


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
         this.setState({ data: data.Stocks })
         console.log(data.Stocks)
        })
            .catch(err => console.log(err))
    }
    render() {
        const { navigate, goBack } = this.props.navigation
        const { data } = this.state
        return (
            <Wrapper>
                <Header navigate={navigate} title={this.props.navigation.state.params.name} goBack={goBack}/>
            <ScrollView style={{margin:0, padding:0}}>
            <GridWrapper>
                <GridMiniView>
                    <GridText primary>Magacin:</GridText>
                    {data.length>0 && data.map((item, i) => (
                        <GridText key={item.Id}>{item.Warehouse.WarehouseName}</GridText>
                    ))}
                </GridMiniView>
                <GridMiniView>
                <GridText primary>Kompora:</GridText>
                    {data.length>0 && data.map((item, i) => (
                        <GridText key={item.Id}>{item.WarehouseChamber.Name}</GridText>
                    ))}
                </GridMiniView>
                <GridMiniView>
                <GridText primary>Tezina: </GridText>
                    {data.length>0 && data.map((item, i) => (
                        <GridText key={item.Id}>{item.Weight}</GridText>
                    ))}
                </GridMiniView>
            </GridWrapper>
            </ScrollView>
            </Wrapper>
        )
    }
}