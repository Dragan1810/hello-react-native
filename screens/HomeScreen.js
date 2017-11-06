import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../components/AppHeader';
import AppSearch from '../components/AppSearch';
import { Constants } from 'expo';


class HomeScreen extends Component {

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
                    <Text>Kategorije</Text>

                    <Button 
                        title='Magacin' 
                        onPress={()=>navigate('Magacin')}
                        borderRadius={50}
                        backgroundColor={'#93d9f0'}
                        icon={{name: 'archive', type: 'entypo'}}
                    />

                    <Button 
                        title='Proizvodnja' 
                        onPress={()=>navigate('Production')} 
                        borderRadius={50}
                        backgroundColor={'#93d9f0'}
                        icon={{name: 'industry', type: 'font-awesome'}}
                    />

                    <Button 
                        title='Documents' 
                        onPress={()=>navigate('RobniPromet')}
                        large
                        icon={{name: 'archive', type: 'entypo'}}
                        backgroundColor={'#93d9f0'}
                        containerViewStyle={ button }
                        borderRadius={50}
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
      paddingTop:10
    }
  });

export default HomeScreen;
