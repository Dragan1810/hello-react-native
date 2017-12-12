import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import AppHeader from '../../components/AppHeader';
import AppSearch from '../../components/AppSearch';
import { Constants } from 'expo';


class Pre extends Component {
constructor() {
    super();
}
        render() {
          const { width,height } = Dimensions.get('window');
          const { navigate } = this.props.navigation;
          const { icon, container, text, searchBar, button } = styles;
            return (
                <View style={text}>
                  <AppHeader navigate={navigate} />
                  <View style={[searchBar, { width }]}>
                    <AppSearch />
                  </View>
                  <Button
                        title='Goveda'
                        large
                        onPress={()=>navigate('goveda')}
                        borderRadius={40}
                        backgroundColor={'#93d9f0'}
                        icon={{name: 'archive', type: 'entypo'}}
                        containerViewStyle={ button }

                    />

                    <Button
                        title='Svinje'
                        large
                        onPress={()=>navigate('pig')}
                        borderRadius={40}
                        backgroundColor={'#93d9f0'}
                        icon={{name: 'industry', type: 'font-awesome'}}
                        containerViewStyle={ button }
                    />

                    <Button
                        title='Jagnjad'
                        onPress={()=>navigate('lamb')}
                        large
                        icon={{name: 'archive', type: 'entypo'}}
                        backgroundColor={'#93d9f0'}
                        containerViewStyle={ button }
                        borderRadius={40}
                    />
                </View>
              );
        }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    container: {
      flex: 1,
    },
    searchBar: {
      alignSelf: 'flex-start',
      height: 100
    },
    text: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 65
    },
    button: {
      paddingTop:5,
      width: 300
    }
  });

export default Pre;