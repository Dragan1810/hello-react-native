import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { GridWrapper,GridText, GridMiniView } from '../styled-components/Grid'
import { TitleText, WrapperHeader, Wrapper } from '../styled-components/Wrapper'
import { getData } from '../helpers/index'
import Header from '../reusable-components/Header'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


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
        const tableHead = ['Redni br.', 'Sifra', 'Artikal', 'Komora', 'Tezina'];
        const tableData = [
          this.state.data.map(item => item.OrderNumber),
          this.state.data.map(item => item.Product.ProductCode),
          this.state.data.map(item => item.Product.ProductName.split(' ')[0]),
          this.state.data.map(item => item.WarehouseChamber.Name),
          this.state.data.map(item => item.Weight.toFixed(3))
        ]
        const { navigate, goBack } = this.props.navigation
        return (
            <View>
                <Header navigate={navigate} title={'Detalji-'} goBack={goBack}/>
            <ScrollView style={{margin:0, padding:0}}>
            <View>
                <Table style={styles.table} borderStyle={{borderWidth: 0.5, borderColor: '#c8e1ff'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} flexArr={[1, 1, 1, 1, 1]}/>
                <Cols data={tableData} textStyle={styles.text} heightArr={[50, 50]} flexArr={[1, 1, 1, 1, 1]}/>
                </Table>
            </View>

            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    table: { width: '100%' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { textAlign: 'center' }
  })