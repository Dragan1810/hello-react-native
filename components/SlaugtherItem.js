import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const SlaugtherItem = ({data}) => {
    return(
        <Card title={data.ProductGroupName}>
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
                    <Text>SlaugtherDate:</Text>
                    <Text>{data.SlaugtherDate}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>SupplierId:</Text>
                    <Text>{data.SupplierId}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>SupplierCode:</Text>
                    <Text>{data.SellingCode}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>SupplierName:</Text>
                    <Text>{data.SupplierName}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>AnimalSubTypeId:</Text>
                    <Text>{data.AnimalSubTypeId}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>AnimalSubTypeCode:</Text>
                    <Text>{data.AnimalSubTypeCode}</Text>                        
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
                    <Text>WeightBeforeSlaugher:</Text>
                    <Text>{data.WeightBeforeSlaugher}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>WeightAfterSlaugher:</Text>
                    <Text>{data.WeightAfterSlaugher}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Randman:</Text>
                    <Text>{data.Randman}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>ByingPrice:</Text>
                    <Text>{data.ByingPrice}</Text>                        
                </View>
                } 
                hideChevron={true} 
            />
            <ListItem 
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>SellingPrice:</Text>
                    <Text>{data.SellingPrice}</Text>                        
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
        </Card>
    )
}
export default SlaugtherItem;

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