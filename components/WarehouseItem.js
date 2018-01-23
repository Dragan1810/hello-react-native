import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';


const WarehouseItem = ({data, navigate}) => {
    const { basic } = styles
    return(
        <Card title={data.WarehouseName}>
        <ListItem
            title={
                <View style={basic}>
                    <Text>WarehouseCode:</Text>
                    <Text>{data.WarehouseCode}</Text>
                </View>
            }
            hideChevron={true}
        />
        <Button
            containerViewStyle={{paddingTop: 12}}
            icon={{name: 'code'}}
            onPress={() => navigate('warehouseArtikli', { url : `http://212.200.54.246:5001/api/Stock/GetStocksByWarehouse?warehouseId=${data.Id}` })}
            backgroundColor='#009688'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Prikazi'
        />
        </Card>
    )
}

const styles = StyleSheet.create({
    basic: {
        flexDirection:'row',
        justifyContent: 'space-between'
    }
})
export default WarehouseItem;

/*
        WarehouseCode

        WarehouseName
        Address
        TypeId
        Type

        Company

        Conto
        ContoPriceDiff

        Active

        CreatedBy

        DateTime CreatedAt
        DateTime UpdatedAt
*/