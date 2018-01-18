import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import { getData } from '../helpers/index'

class AnimalTypeItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Id: this.props.data.Id,
            data: []
        }
    }
    componentDidMount(){
        getData(`http://212.200.54.246:5001/api/AnimalSubType/GetAnimalSubTypes?CompanyId=1&AnimalTypeId=${this.state.Id}`)
        .then(data=>this.setState({data : data.AnimalSubTypes}))

    }


    render() {
        const { basic } = styles
        let { data } = this.state

        return (
               <Card title={this.props.data.Name}>
                    {data.length>1 && data.map((item, i) => (
                                        <ListItem
                                            key={i}
                                            hideChevron={true}
                                            title={
                                                <View style={basic}>
                                                    <Text>{item.Name}</Text>
                                                    <Text>{item.Code}</Text>

                                                </View>
                                            }
                                        />
                                    ))}
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
  {Data.AnimalSubTypes.map((item, i) => (
                    <ListItem
                        key={i}
                        title={
                            <View>
                                <Text>{item.Name}</Text>
                                <Text>{item.Code}</Text>

                            </View>
                        }
                    />
                ))}
*/