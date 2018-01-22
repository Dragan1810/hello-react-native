import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import { format } from 'date-fns'


const BoxItem = ({data}) => {
    return(
        <Card title={data.Name}>
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>Trenutno u boksu:</Text>
                        <Text>{data.CurrentlyInBox}</Text>
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>Zivotinje:</Text>
                        <Text>{data.AnimalSubType.Name}</Text>
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>Dobavljac:</Text>
                        <Text>{data.BusinessPartner.Name}</Text>
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>Datum Prijema:</Text>
                        <Text>{format(data.InputNote.InputNoteDate, 'DD/MM/YYYY')}</Text>
                    </View>
                }
                hideChevron={true}
            />



        </Card>
    )
}
export default BoxItem;

/*
 {
    "CreatedById": 13,
    "CreatedByName": "Ivan Ivanovic",
    "Id": 21,
    "Code": 1002,
    "Name": "Box 2",
    "Capacity": 56,
    "CurrentlyInBox": 41,
    "ReceiveNoteId": 0,
    "ReceiveNoteCode": 0,
    "AnimalType": null,
    "BusinessPartnerName": null
  },
*/