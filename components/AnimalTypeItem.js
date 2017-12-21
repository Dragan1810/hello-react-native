import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const AnimalTypeItem = ({data}) => {
    return(
        <Card title={data.Name}>
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>CompanyId:</Text>
                        <Text>{data.CompanyId}</Text>                        
                    </View>
                }
                hideChevron={true}
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>CompanyName:</Text>
                    <Text>{data.CompanyId}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
        </Card>
    )
}
export default AnimalTypeItem;

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