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
                    <Text>Datum klanja:</Text>
                    <Text>{data.PigSlaughterDate}</Text>
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>LOT broj:</Text>
                <Text>{data.Code}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Težina pre klanja:</Text>
                <Text>{data.WeightBeforeSlaughter}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Težina posle klanja:</Text>
                <Text>{data.WeightAfterSlaughter}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Randman:</Text>
                <Text>{data.Randman}</Text>
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
•	Weight - Težina
•	NumOfWeightItems - Količina
•	PigSlaughterDate - Datum merenja

*/