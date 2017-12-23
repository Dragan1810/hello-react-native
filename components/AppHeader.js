import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo'
import { Image } from 'react-native';

class AppHeader extends Component {
    render() {
        const { title } = this.props
        const { navigate, goBack } = this.props.navigation
        return (
            <Header
            backgroundColor={'#009688'}
            leftComponent={<Meni navigate={this.props.navigation} />}
            centerComponent={{ text: title, style: { color: '#fff' } }}
            rightComponent={<Home navigate={navigate} />}
            />
        );
    }
}

const Meni = ({navigate}) => (
    navigate.state.routeName !== 'Home' ?
     <Icon name='arrow-back' color='#fff' onPress={() => navigate.goBack(null)} />
     : <Icon name='home' color='#fff'/>
    );

const Center = (props) => (
    <Image source={require('../assets/logo.png')} style={{width:20, height:20}}/>
)

const Home = (props) => (
    <Icon name='home' color='#fff' onPress={() => props.navigate('Home')} />
    );


export default AppHeader;