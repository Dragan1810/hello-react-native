import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const ListItems = ({data}) => {
    const { basic } = styles
    return(
        <Card title={data.CompanyName}>
        <ListItem
            title={
                <View style={basic}>
                    <Text>Dobavljač:</Text>
                    <Text>{data.SupplierName}</Text>
                </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Datum klanja:</Text>
                <Text>{data.SlaughterDate}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>LOT broj:</Text>
                <Text>{data.Code}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Vrsta životinje:</Text>
                <Text>{data.AnimalSubTypeName}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Težina pre klanja:</Text>
                <Text>{data.WeightBeforeSlaughter}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Težina posle klanja:</Text>
                <Text>{data.WeightAfterSlaughter}</Text>
            </View>
            }
            hideChevron={true}
        />
        <ListItem
            title={
            <View style={basic}>
                <Text>Randman:</Text>
                <Text>{data.Randman}</Text>
            </View>
            }
            hideChevron={true}
        />

    </Card>
    )
}
export default ListItems;

const styles = StyleSheet.create({
    basic: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
/*
"Id": 21,
"CompanyCode": 1005,
"CompanyName": "Djurdjevic5 klanica d.o.o",
"CityId": null,
"City": null,
"ZipCode": null,
"Address": "Primer adresa",
"CountryId": null,
"CountryCode": null,
"CountryName": "",
"BankAccountNo": "111-123-1321",
"BankAccountName": "Ime korisnika racuna",
"IdentificationNumber": "313123123132131232",
"PIBNumber": "101101101",
"PIONumber": "1001010",
"PDVNumber": "18",
"IndustryCode": "1001",
"IndustryName": "Prerada mesa",
"MunicipalityId": null,
"MunicipalityCode": null,
"MunicipalityName": null,
"Email": "mail@firma.com",
"WebSite": "http://firma.rs",
"IsSelected": false,
"UpdatedAt": "14.09.2017ListItems
*/