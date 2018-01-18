import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import { getData } from '../helpers/index'


class AnimalTypeItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            Id: this.props.data.Id
        }
    }
    componentDidMount(){
        getData(`http://212.200.54.246:5001/api/AnimalSubType/GetAnimalSubTypes?CompanyId=1&AnimalTypeId=${this.state.Id}`)
            .then(data => this.setState({ data }))
    }
    render(){
        console.log(this.state.Id)
        const { basic } = styles
            return (
                <Card title={this.props.data.Name}>
            {this.state.data.length>1 && this.state.data.map((item, i) =>
                <ListItem
                    title={
                        <View style={basic}>
                            <Text>{item.Name}</Text>
                            <Text>{item.Code}</Text>
                        </View>
                    }
                    key={i}
                    hideChevron={true}
                />
            )}

        </Card>
    )
    }
}

const styles = StyleSheet.create({
    basic: {
        flexDirection:'row',
        justifyContent: 'space-between'
    }
})
export default AnimalTypeItem;

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