import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';
import { format } from 'date-fns'



const ListItems = ({data, navigate}) => {
    const { basic } = styles
    return(
        <Card title={data.Supplier.Name}>
        <ListItem
            title={
                <View style={basic}>
                    <Text>Datum klanja:</Text>
                    <Text>{format(data.LambSlaughterDate, 'DD/MM/YYYY')}</Text>
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>LOT:</Text>
                <Text>{data.Code}</Text>
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
        <Button
            containerViewStyle={{paddingTop: 12}}
            icon={{name: 'code'}}
            onPress={() => navigate('details', { url : `http://212.200.54.246:5001/api/LambSlaughter/GetAllBySlaughter?SlaughterId=${data.Id}` })}
            backgroundColor='#009688'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Detalji'
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
•	LambSlaughterDate - Datum merenja

*/