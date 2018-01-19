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
        getData(url).then(data => {
           data.hasOwnProperty('SlaughterItems') && this.setState({ data: data.SlaughterItems })
           data.hasOwnProperty('PigSlaughterItems') && this.setState({ data: data.PigSlaughterItems })
           data.hasOwnProperty('LambSlaughterItems') && this.setState({ data: data.LambSlaughterItems })

        })
            .catch(err => console.log(err))
    }
    render() {
        const { navigate, goBack } = this.props.navigation
        const { data } = this.state
        return (
            <Wrapper>
                <Header navigate={navigate} title={'Detalji-'} goBack={goBack}/>
            <ScrollView style={{margin:0, padding:0}}>
            <GridWrapper>
                <GridMiniView>
                    <GridText>Redni br.</GridText>
                    {data.length>0 && data.map((item, i) => (
                        <GridText key={item.Id}>{item.OrderNumber}</GridText>
                    ))}
                </GridMiniView>
                <GridMiniView>
                <GridText>Sifra</GridText>
                    {data.length>0 && data.map((item, i) => (
                        <GridText key={item.Id}>{item.Product.ProductCode}</GridText>
                    ))}
                </GridMiniView>
                <GridMiniView>
                <GridText>Artikal</GridText>
                    {data.length>0 && data.map((item, i) => (
                        <GridText key={item.Id}>{item.Product.ProductName.split(' ')[0]}</GridText>
                    ))}
                </GridMiniView>
                <GridMiniView>
                <GridText>Komora</GridText>
                    {data.length>0 && data.map((item, i) => (
                        <GridText key={item.Id}>{item.WarehouseChamber.Name}</GridText>
                    ))}
                </GridMiniView>
                <GridMiniView>
                <GridText>Tezina</GridText>
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