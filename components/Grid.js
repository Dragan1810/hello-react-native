import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GridWrapper } from '../styled-components/Grid'
import { TitleText } from '../styled-components/Wrapper'
import { getData } from '../helpers/index'



export default class Grid extends Component {
    constructor(){
        super()

        this.state = {
            atikal: [],
            Tezina: [],
            Radman: []
        }
    }

    componentDidMount(){
       // getData(this.props.url)
    }
    render() {
        console.log(this.props.navigation.state.params)
        return (
            <GridWrapper>
                <View>
                    <Text>Hellooooooooooooooooooo</Text>
            <TitleText>Artikal</TitleText>
            {/* {this.state.artikal.length && this.state.artikal.map((item, i) => <Text key={i}>{item}</Text>)} */}
                </View>
                <View></View>
                <View></View>
                <View></View>
            </GridWrapper>
        )
    }
}