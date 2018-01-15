import React from 'react'
import { Icon } from 'react-native-elements'
import { Wrapper, WrapperHeader, TitleText } from '../styled-components/Wrapper'

const Header = ({title, goBack, navigate}) => (
    <WrapperHeader>
       { title === 'Glavni Meni' ? <Icon name='menu' color='#fff' onPress={() => alert('Test 123')} />
       : <Icon name='arrow-back' color='#fff' onPress={() => goBack(null)} />}
        <TitleText>{title}</TitleText>
        <Icon name='home' color='#fff' onPress={() => navigate('Home')} />
    </WrapperHeader>
)

export default Header