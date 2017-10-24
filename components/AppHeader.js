import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';

class AppHeader extends Component {
    render() {
        return (
            <Header
            backgroundColor={'#3D6DCC'}
            leftComponent={<Meni navigate={this.props.navigate} />}
            centerComponent={{ text: 'ERP', style: { color: '#fff' } }}
            rightComponent={<Home navigate={this.props.navigate} />}
            />
        );
    }
}

const Meni = (props) => (
     <Icon name='menu' color='#fff' onPress={() => props.navigate('DrawerOpen')} />
    );

const Home = (props) => (
    <Icon name='home' color='#fff' onPress={() => props.navigate('Home')} />
    );


export default AppHeader;
