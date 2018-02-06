import React, { Components } from 'react'
import styled from 'styled-components/native'
import { Constants } from 'expo'


export const Wrapper = styled.View`
    background-color: #eae7e3;
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
export const WrapperHeaderCentar = WrapperHeader.extend`
    justify-content: center;
`;

export const TitleText = styled.Text`
    font-size: 20px;
    color: white;
`;

export const Kocka = styled.TouchableOpacity`
    border-radius: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    min-width: 27%;
    align-items: center;
    background-color: white;
    margin: 10px;
`;

export const KockaText = styled.Text`
    font-weight: bold;
    padding-top: ${props => props.sec ? '1px': '6px'};
    text-align: center;
`;

export const KockaImage = styled.Image`
    width: 50px;
    height: 50px;
`;

export const KockaWrapper = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;