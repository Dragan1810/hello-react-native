import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const DepotItem = ({data}) => {
    return(
        <Card title={data.Name}>
            <ListItem title={data.CompanyId} />
            <ListItem title={data.Code} />
            <ListItem title={data.Name} />
            <ListItem title={data.Description} />
            <ListItem title={data.Boxes} />
            <ListItem title={data.CreatedById} />
            <ListItem title={data.CreatedByName} />
        </Card>
    )
}
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