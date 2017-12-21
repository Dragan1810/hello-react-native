import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const ProductItem = ({data}) => {
    return(
        <Card title={data.ProductName}>
            <ListItem title={data.ProductCode} />
            <ListItem title={data.BarCode} />
            <ListItem title={data.MinQuantity} />
            <ListItem title={data.ProductGroupName} />
            <ListItem title={data.CompanyName} />
        </Card>
    )
}
export default ProductItem;
/*
"Id": 30,
"ProductCode": 1001,
"ProductName": "Svinjska jetra",
"UnitOfMeasurement": "KG",
"BarCode": "123321161111",
"MinQuantity": "5",
"PdvPercent": 20,
"ProductGroupId": 25,
"ProductGroupCode": 1001,
"ProductGroupName": "Svinjski program",
"MadeInCountryId": null,
"MadeInCountryCode": null,
"MadeInCountryName": "",
"BestBefore": 7,
"BusinessPartnerId": 15,
"BusinessPartnerCode": 1001,
"BusinessPartnerName": "Mesopromet a.d.",
"CreatedByName": "Petar Petrovic",
"CompanyName": "Djurdjevic klanica d.o.o",
"UpdatedAt": "14.09.2017 23:34"

*/