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
            <ListItem title={data.CountyId} />
            <ListItem title={data.CountryName} />
            <ListItem title={data.MunicipalityId} />
            <ListItem title={data.MunicipalityCode} />
            <ListItem title={data.MunicipalityName} />
            <ListItem title={data.IndustryCode} />
            <ListItem title={data.Phone} />
            <ListItem title={data.Mobile} />
            <ListItem title={data.Rebate} />
            <ListItem title={data.IndustryCode} />
            <ListItem title={data.IdentificationNumber} />
            <ListItem title={data.Fax} />
            <ListItem title={data.ContactPerson} />
            <ListItem title={data.BankAccountName} />
            <ListItem title={data.BankAccountNumber} />
            <ListItem title={data.IsInPDV} />
            <ListItem title={data.DueDate} />
            <ListItem title={data.Email} />
            <ListItem title={data.WebSite} />
            <ListItem title={data.IsSelected} />
            <ListItem title={data.CreatedByName} />
            <ListItem title={data.CompanyName} />
            <ListItem title={data.UpdatedAt} />

        </Card>
    )
}
export default BPItem;
//gfgfgg
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