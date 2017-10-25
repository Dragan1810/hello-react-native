import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const CompanyItem = ({data}) => {
    return(
        <Card title={data.CompanyName}>
            <ListItem title={data.CompanyCode} />
            <ListItem title={data.Address} />
            <ListItem title={data.IndustryName} />
            <ListItem title={data.Email} />
            <ListItem title={data.WebSite} />
        </Card>
    )
}
export default CompanyItem;
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
"UpdatedAt": "14.09.2017 23:34"

*/