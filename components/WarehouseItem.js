import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';
import { getData } from '../helpers/index'

function Itemz({data}){
    let {basic} = styles
    return(
        <Card title={data.item.ProductName}>
        <ListItem
            title={
                <View style={basic}>
                    <Text>ProductCode:</Text>
                    <Text>{data.item.ProductCode}</Text>
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={basic}>
                    <Text>WarehouseName:</Text>
                    <Text>{data.item.WarehouseName}</Text>
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={basic}>
                    <Text>Name:</Text>
                    <Text>{data.item.Name}</Text>
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={basic}>
                    <Text>Weight:</Text>
                    <Text>{data.item.Weight}</Text>
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={basic}>
                    <Text>Quantity:</Text>
                    <Text>{data.item.Quantity}</Text>
                </View>
            }
            hideChevron={true}
        />
        </Card>
    )
}

const urlMini = `http://212.200.54.246:5001/api/StockItem/GetStockItemsByWarehouseForMobile?companyId=1&`
export default class WarehouseItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount(){
       const { Cid, Wid } = this.props;
       const url = `${urlMini}warehouseId=${Wid}&warehouseChamberId=${Cid}`
       console.log(url)
       getData(url).then(data => this.setState({ data }))
    }
    render() {
        console.log(this.state.data)
    return(
        <FlatList
        style={{width:'100%'}}
        data={this.state.data}
        renderItem={(data) => (
            <Itemz data={data}/>
         )}
        keyExtractor={data => data.Id}
        />
    )
}
}

const styles = StyleSheet.create({
    basic: {
        flexDirection:'row',
        justifyContent: 'space-between'
    }
})
