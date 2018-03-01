import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';


const ProductItem = ({data, navigate}) => {
    const { basic } = styles
    return(
        <Card title={data.Product.ProductName}>
            <ListItem
                title={
                    <View style={basic}>
                        <Text>Sifra Artikla:</Text>
                        <Text>{data.Product.ProductCode}</Text>
                    </View>
                }
                hideChevron={true}
            />
             <ListItem
                title={
                <View style={basic}>
                    <Text>Ukupna tezina:</Text>
                    <Text>{data.Weight}</Text>
                </View>
                }
                hideChevron={true}
            />
            <ListItem
                title={
                <View style={basic}>
                    <Text>Na stanju:</Text>
                    <Text>{data.Quantity}</Text>
                </View>
                }
                hideChevron={true}
            />
            <Button
            containerViewStyle={{paddingTop: 12, alignItems:'flex-end'}}
            onPress={() => navigate('detailsArtikli', { url : `http://212.200.54.246:5001/api/Stock/GetStocksByPagesForMobile?companyId=1&currentPage=1&itemsPerPage=50&productId=${data.Product.Id}`, name: data.Product.ProductName })}
            backgroundColor='#009688'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Kartica'
        />
        </Card>
    )
}

const styles = StyleSheet.create({
    basic: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
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