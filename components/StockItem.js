import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const StockItem = ({data}) => {
    const { basic } = styles
    return(
        <Card title={data.ProductName}>
            <ListItem
                title={
                    <View style={basic}>
                        <Text>Sifra Proizvoda:</Text>
                        <Text>{data.ProductCode}</Text>
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                <View style={basic}>
                    <Text>Grupa Proizvoda:</Text>
                    <Text>{data.ProductGroup.Name}</Text>
                </View>
                }
                hideChevron={true}
            />
        </Card>
    )
}


const styles = StyleSheet.create({
    basic: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
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