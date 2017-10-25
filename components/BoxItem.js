import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const BoxItem = ({data}) => {
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
export default BoxItem;