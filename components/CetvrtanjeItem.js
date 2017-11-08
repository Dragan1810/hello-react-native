import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const CetvrtanjeItem = ({data}) => {
    return(
        <Card title={data.ProductGroupName}>
            <ListItem
                title={
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text>ProductCode:</Text>
                        <Text>{data.ProductCode}</Text>                        
                    </View>
                }
                hideChevron={true}
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>AnimalSubTypeName:</Text>
                    <Text>{data.AnimalSubTypeName}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>CurrentlyAvailable:</Text>
                    <Text>{data.CurrentlyAvailable}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Reserved:</Text>
                    <Text>{data.Reserved}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Weight:</Text>
                    <Text>{data.Weight}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Quantity:</Text>
                    <Text>{data.Quantity}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>PdvPercent:</Text>
                    <Text>{data.PdvPercent}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Base:</Text>
                    <Text>{data.Base}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>PdvValue:</Text>
                    <Text>{data.PdvValue}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>SellingValue:</Text>
                    <Text>{data.SellingValue}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>TotalPdv:</Text>
                    <Text>{data.TotalPdv}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>TotalValue:</Text>
                    <Text>{data.TotalValue}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
        </Card>
    )
}
export default CetvrtanjeItem;

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