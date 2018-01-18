import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const ListItems = ({data}) => {
    const { basic } = styles
    return(
        <Card title={data.Product.ProductName}>
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
                    <Text>{data.Warehouse.WarehouseName}</Text>
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Komora:</Text>
                <Text>{data.WarehouseChamber.Name}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Pasoš:</Text>
                <Text>{data.Passport.AnimalId}</Text>
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
                <Text>Klasa:</Text>
                <Text>{data.ClassificationValue}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Količina:</Text>
                <Text>{data.NumOfWeightItems}</Text>
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