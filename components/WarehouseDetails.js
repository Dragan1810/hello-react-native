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
            getData(url)
                .then(data => data.Stocks.map(item => ({
                    Id: item.Id,
                    ProductCode: item.Product.ProductCode,
                    Quantity: item.Quantity,
                    Weight: item.Weight
                    })
                ))
            .then(data => {
                let keys = [...new Set(data.map(item => item.ProductCode))]

                return keys.map((item,i) =>  data
                    .filter(obj => obj.ProductCode === item)
                    .reduce((acc, obj) => ({
                        Id: obj.Id,
                        ProductCode: obj.ProductCode,
                        Quantity: acc.Quantity + obj.Quantity,
                        Weight: acc.Weight + obj.Weight
                    }))
                )
            })
            .then(data => this.setState({data}))
            .catch(err => console.log(err))
    }
    render() {
        const { navigate, goBack } = this.props.navigation
        const { data } = this.state
        return (
            <Wrapper>
                <Header navigate={navigate} title={'Naslov'} goBack={goBack}/>
            <ScrollView style={{margin:0, padding:0}}>
            <GridWrapper>
                <GridMiniView>
                    <GridText>Šifra artikla:</GridText>
                    {data.length>0 && data.map((item, i) => (
                        <GridText key={item.Id}>{item.ProductCode}</GridText>
                    ))}
                </GridMiniView>
                <GridMiniView>
                <GridText>Na stanju :</GridText>
                    {data.length>0 && data.map((item, i) => (
                        <GridText key={item.Id}>{item.Quantity}</GridText>
                    ))}
                </GridMiniView>
                <GridMiniView>
                <GridText>Tezina: </GridText>
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