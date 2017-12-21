import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const BoxItem = ({data}) => {
    return(
        <Card title={data.Name}>
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>Id:</Text>
                        <Text>{data.Id}</Text>                        
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>Code:</Text>
                        <Text>{data.Code}</Text>                        
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>Capacity:</Text>
                        <Text>{data.Capacity}</Text>                        
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>CurrentlyInBox:</Text>
                        <Text>{data.CurrentlyInBox}</Text>                        
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>ReceiveNoteId:</Text>
                        <Text>{data.ReceiveNoteId}</Text>                        
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>ReceiveNoteCode:</Text>
                        <Text>{data.ReceiveNoteCode}</Text>                        
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>AnimalType:</Text>
                        <Text>{data.AnimalType}</Text>                        
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>BusinessPartner:</Text>
                        <Text>{data.BusinessPartnerName}</Text>                        
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>CreatedById:</Text>
                        <Text>{data.CreatedById}</Text>                        
                    </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>CreatedByName:</Text>
                        <Text>{data.CreatedByName}</Text>                        
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