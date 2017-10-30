import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const BPItem = ({data}) => {
    return(
        <Card title={data.Name}>
            <ListItem title={data.Address} />
            <ListItem title={data.Code} />
            <ListItem title={data.PIB} />
            <ListItem title={data.PIO} />
            <ListItem title={data.PDV} />
            <ListItem title={data.IndustryCode} />
            <ListItem title={data.Phone} />

        </Card>
    )
}
export default BPItem;

/*
"Id": 13,
"Code": 1003,
"Name": "Farma Petrovic a.d.",
"Address": "Sporedni put 123",
"CountryId": null,
"CountryCode": null,
"CountryName": "",
"MunicipalityId": null,
"MunicipalityCode": null,
"MunicipalityName": "",
"PIB": "111222333",
"PIO": null,
"PDV": "125478",
"IndustryCode": "6201",
"IdentificationNumber": null,
"Rebate": 15,
"Phone": "0222225558",
"Mobile": "022112211",
"Fax": null,
"ContactPerson": null,
"BankAccountNumber": null,
"BankAccountName": null,
"IsInPDV": false,
"DueDate": 0,
"IsFarmer": false,
"Email": null,
"WebSite": null,
"IsSelected": false,
"CreatedByName": "Petar Petrovic",
"CompanyName": "Djurdjevic klanica d.o.o",
"UpdatedAt": "14.09.2017 23:34ddddddddddd"
*/