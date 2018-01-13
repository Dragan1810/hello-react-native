import React from 'react'
import styled from 'styled-components/native'
import { Constants } from 'expo'
import { Wrapper } from './Wrapper'


export const GridWrapper = Wrapper.extend`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border:1px solid black;
`;