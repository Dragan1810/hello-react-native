import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const WarehouseItem = ({data}) => {
    return(
        <Card title={data.WarehouseName}>
            <ListItem title={data.WarehouseCode} />
            <ListItem title={data.Adress} />
            <ListItem title={data.TypeId} />
            <ListItem title={data.Type} />
            <ListItem title={data.Company} />
            <ListItem title={data.Conto} />
            <ListItem title={data.ContoPriceDiff} />
            <ListItem title={data.Active} />
            <ListItem title={data.CreatedAt} />
            <ListItem title={data.UpdatedAts} />

        </Card>
    )
}
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