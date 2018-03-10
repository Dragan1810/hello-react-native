import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';
import { getData } from '../helpers/index'

function Itemz({data}){
    let {basic} = styles
    return(
        <Card title={data.item.DocumentName}>
        <ListItem
            title={
                <View style={basic}>
                    <Text>Document:</Text>
                    <Text>{data.item.DocumentName}</Text>
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={basic}>
                    <Text>Opis:</Text>
                    <Text>{data.item.DocumentDescription}</Text>
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={basic}>
                    <Text>Process:</Text>
                    <Text>{data.item.DocumentProcessDescription}</Text>
                </View>
            }
            hideChevron={true}
        />
        </Card>
    )
}

const urlMini = `http://212.200.54.246:5001/api/StockTraceability/GetTraceabilityByWarehouse?`
export default class WarehouseItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount(){
       const { Wid, Cid } = this.props
       const url = `${urlMini}warehouseId=${Wid}&warehouseChamberId=${Cid}`
      // console.log(url)
       getData(url).then(data => this.setState({ data: data.StockTraceabilities }))
    }
    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevProps.Cid !== this.props.Cid) {
            const { Cid, Wid } = this.props
            const url = `${urlMini}warehouseId=${Wid}&warehouseChamberId=${Cid}`
            console.log("DONG")
       getData(url).then(data => this.setState({ data }))

        }
      }
    render() {
     //   console.log(this.state.data)
    return(
        <FlatList
        style={{width:'100%'}}
        data={this.state.data}
        renderItem={(data) => (
            <Itemz data={data}/>
         )}
        keyExtractor={data => data.DocumentId}
        />
    )
}
}

const styles = StyleSheet.create({
    basic: {
        flexDirection:'column'
    }
})
