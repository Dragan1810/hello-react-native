import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const DepotItem = ({data}) => {
    return(
        <Card title={data.Name}>
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Name:</Text>
                    <Text>{data.Name}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Description:</Text>
                    <Text>{data.Description}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Boxes:</Text>
                    <Text>{data.Boxes}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
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
                    <Text>{data.CompanyName}</Text>                        
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