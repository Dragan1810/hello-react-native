import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const DepotItem = ({data}) => {
    const { basic } = styles
    return(
        <Card title={data.Name}>
            <ListItem
                title={
                    <View style={ basic }>
                        <Text>Ime:</Text>
                        <Text>{data.Name}</Text>
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                <View style={ basic }>
                    <Text>Datum:</Text>
                    <Text>{data.InputNoteDate}</Text>
                </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={ basic }>
                    <Text>Količina:</Text>
                    <Text>{data.Quantity}</Text>
                </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={ basic }>
                    <Text>Životinja:</Text>
                    <Text>{data.AnimalSubTypeName}</Text>
                </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={ basic }>
                    <Text>Dobavljač:</Text>
                    <Text>{data.BusinessPartnerName}</Text>
                </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={ basic }>
                    <Text>Tip plaćanja:</Text>
                    <Text>{data.PaymentType}</Text>
                </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={ basic }>
                    <Text>Jedinična cena:</Text>
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
        </Card>
    )
}
const styles = StyleSheet.create({
    basic: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default DepotItem;

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