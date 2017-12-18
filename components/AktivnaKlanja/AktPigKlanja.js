import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const ListItems = ({data}) => {
    const { basic } = styles
    return(
        <Card title={data.CompanyName}>
        <ListItem
            title={
                <View style={basic}>
                    <Text>Redni br:</Text>
                    <Text>{data.OrderNumber}</Text>
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Magacin:</Text>
                <Text>{data.WarehouseName}</Text>
            </View>
            }
            hideChevron={true}
        />
         <ListItem
            title={
            <View style={basic}>
                <Text>Komora:</Text>
                <Text>{data.WarehouseChamberName}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Artikal:</Text>
                <Text>{data.ProductName}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Težina:</Text>
                <Text>{data.Weight}</Text>
            </View>
            }
            hideChevron={true}
        />

        <ListItem
            title={
            <View style={basic}>
                <Text>Količina:</Text>
                <Text>{data.NumOfWeightedItems}</Text>
            </View>
            }
            hideChevron={true}
        />

    </Card>
    )
}
export default ListItems;

const styles = StyleSheet.create({
    basic: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
/*
•	OrderNumber - Br. klanja
•	ProductName - Artikal
•	WarehouseName - Magacin
•	WarehouseChamberName - Komora
•	PassportCode - Pasoš
•	Weight - Težina
•	NumOfWeightItems - Količina
•	SlaughterDate - Datum merenja


*/