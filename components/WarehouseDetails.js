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
        })
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
                        <GridText key={item.Id}>{item.Product.ProductCode}</GridText>
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