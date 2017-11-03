import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const BoxItem = ({data}) => {
    return(
        <Card title={data.Name}>
            <ListItem title={data.Id} />
            <ListItem title={data.CreatedByName} />
            <ListItem title={data.CreatedById} />
            <ListItem title={data.Code} />
            <ListItem title={data.Capacity} />
            <ListItem title={data.CurrentlyInBox} />
            <ListItem title={data.ReceiveNoteId} />
            <ListItem title={data.ReceiveNoteCode} />
            <ListItem title={data.AnimalType} />
            <ListItem title={data.BusinessPartnerName} />
            
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