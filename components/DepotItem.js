import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';


const DepotItem = ({data, navigate}) => {
    return(
        <Card title={data.Name}>
            <ListItem
                title={
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>Boksevi:</Text>
                    <Button title={'Prikazi'} onPress={()=>navigate('box',{Id: data.Id})}/>
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