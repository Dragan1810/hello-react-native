import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const WarehouseItem = ({data}) => {
    return(
        <Card title={data.WarehouseName}>
        <ListItem
            title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>WarehouseCode:</Text>
                    <Text>{data.WarehouseCode}</Text>                        
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Adress:</Text>
                    <Text>{data.Adress}</Text>                        
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>TypeId:</Text>
                    <Text>{data.TypeId}</Text>                        
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Type:</Text>
                    <Text>{data.Type}</Text>                        
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Company:</Text>
                    <Text>{data.Company}</Text>                        
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Conto:</Text>
                    <Text>{data.Conto}</Text>                        
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>ContoPriceDiff:</Text>
                    <Text>{data.ContoPriceDiff}</Text>                        
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Active:</Text>
                    <Text>{data.Active}</Text>                        
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>CreatedAt:</Text>
                    <Text>{data.CreatedAt}</Text>                        
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>UpdatedAt:</Text>
                    <Text>{data.UpdatedAt}</Text>                        
                </View>
            }
            hideChevron={true}
        />
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