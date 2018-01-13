import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { GridWrapper } from '../styled-components/Grid'
import { TitleText } from '../styled-components/Wrapper'
import { getData } from '../helpers/index'

const URL = `https://my.api.mockaroo.com/GridTest?key=51de2ad0`

export default class Grid extends Component {
    constructor(){
        super()

        this.state = {
            data: []
        }
    }

    componentDidMount(){
       // console.log(this.props.navigation.state.params)
        getData(URL).then(data => this.setState({ data }))
    }
    render() {
       const { data } = this.state
        return (
            <ScrollView>
            <GridWrapper>
                <View>
                    <Text>First Name</Text>
                    {data.length>0 && data.map((item, i) => (
                        <Text key={item.first_name}>{item.first_name}</Text>
                    ))}
                </View>
                <View>
                <Text>Last Name</Text>
                    {data.length>0 && data.map((item, i) => (
                        <Text key={item.last_name}>{item.last_name}</Text>
                    ))}
                </View>
                <View>
                <Text>Email</Text>
                    {data.length>0 && data.map((item, i) => (
                        <Text key={item.email}>{item.email}</Text>
                    ))}
                </View>
            </GridWrapper>
            </ScrollView>
        )
    }
}