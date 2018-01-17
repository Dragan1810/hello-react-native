import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const StockItem = ({data}) => {
    return(
        <Card title={data.ProductName}>
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>Sifra Proizvoda:</Text>
                        <Text>{data.ProductCode}</Text>
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Grupa Proizvoda:</Text>
                    <Text>{data.ProductGroup.Name}</Text>
                </View>
                }
                hideChevron={true}
            />

        </Card>
    )
}
export default StockItem;

/*
"Id": 9,
"Code": 1002,
"CompanyId": 22,
"Name": "Depo 2",
"Description": null,
"Boxes": null,
"CreatedById": 13,
"CreatedByName": "Ivan Ivanovic"
*/