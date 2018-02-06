import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import { format } from 'date-fns'


const InputNoteItem = ({data}) => {
    const { basic } = styles
    return(
        <Card title={data.BusinessPartner.Name}>

            <ListItem
                title={
                <View style={ basic }>
                    <Text>Datum:</Text>
                    <Text>{format(data.InputNoteDate, 'DD/MM/YYYY')}</Text>
                </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={ basic }>
                    <Text>Cena po Kg:</Text>
                    <Text>{data.UnitPrice}</Text>
                </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={ basic }>
                    <Text>Ukupna cena:</Text>
                    <Text>{data.TotalValue}</Text>
                </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={ basic }>
                    <Text>Životinja:</Text>
                    <Text>{data.AnimalSubType.Name}</Text>
                </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                <View style={ basic }>
                    <Text>Broj grla:</Text>
                    <Text>{data.Quantity}</Text>
                </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={ basic }>
                    <Text>Tezina na farmi:</Text>
                    <Text>{data.FarmWeight}</Text>
                </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={ basic }>
                    <Text>Tezina kod prijema:</Text>
                    <Text>{data.ReceivedWeight}</Text>
                </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={ basic }>
                    <Text>Kalo transporta:</Text>
                    <Text>{data.TransportShrinkage.toFixed(4)}</Text>
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
export default InputNoteItem;

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