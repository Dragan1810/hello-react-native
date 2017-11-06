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
                    <Button
                        title='Magacin'
                        large
                        onPress={()=>navigate('Magacin')}
                        borderRadius={40}
                        backgroundColor={'#93d9f0'}
                        icon={{name: 'archive', type: 'entypo'}}
                        containerViewStyle={ button }

                    />

                    <Button
                        title='Proizvodnja'
                        large
                        onPress={()=>navigate('Production')}
                        borderRadius={40}
                        backgroundColor={'#93d9f0'}
                        icon={{name: 'industry', type: 'font-awesome'}}
                        containerViewStyle={ button }
                    />

                    <Button
                        title='Dokumenti'
                        onPress={()=>navigate('Kartoteka')}
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

export default HomeScreen;
