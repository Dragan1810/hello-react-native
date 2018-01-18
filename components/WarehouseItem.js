import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';


const WarehouseItem = ({data}) => {
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
        <ListItem
            title={
                <View style={basic}>
                    <Text>Sadrzaj Magacina:</Text>
                    <Button title='Prikazi' />
                </View>
            }
            hideChevron={true}
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