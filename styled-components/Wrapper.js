import React, { Components } from 'react'
import styled from 'styled-components/native'
import { Constants } from 'expo'


export const Wrapper = styled.View`
    background-color: white;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
`;

export const WrapperHeader = styled.View`
    background-color: #009688;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${Constants.statusBarHeight+5}px 12px 15px 12px;

`;

export const TitleText = styled.Text`
    font-size: 18px;
    color: white;
`;