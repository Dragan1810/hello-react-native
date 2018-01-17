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
            <ScrollView>
            <GridWrapper>
                <View>
                    <Text>Redni br.</Text>
                    {data.length>0 && data.map((item, i) => (
                        <Text key={item.Id}>{item.OrderNumber}</Text>
                    ))}
                </View>
                <View>
                <Text>Sifra</Text>
                    {data.length>0 && data.map((item, i) => (
                        <Text key={item.Id}>{item.Product.ProductCode}</Text>
                    ))}
                </View>
                <View>
                <Text>Artikal</Text>
                    {data.length>0 && data.map((item, i) => (
                        <Text key={item.Id}>{item.Product.ProductName}</Text>
                    ))}
                </View>
                <View>
                <Text>Komora</Text>
                    {data.length>0 && data.map((item, i) => (
                        <Text key={item.Id}>{item.WarehouseChamber.Name}</Text>
                    ))}
                </View>
                <View>
                <Text>Tezina</Text>
                    {data.length>0 && data.map((item, i) => (
                        <Text key={item.Id}>{item.Weight}</Text>
                    ))}
                </View>
            </GridWrapper>
            </ScrollView>
            </Wrapper>
        )
    }
}