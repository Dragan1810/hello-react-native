import React, { Component } from 'react'
import { MainRoutes } from '../Config/index'
import { Wrapper } from '../styled-components/Wrapper'
import GridList from '../reusable-components/GridLista'
import Header from '../reusable-components/Header'
import Web from '../components/Web'

export default class HomeScreen extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let { navigate, goBack } = this.props.navigation
    return (
      <Web/>
    )
  }
}

/*
<Wrapper>
        <Header title={'Glavni Meni'} goBack={goBack} />
        <GridList navigate={navigate} MainRoutes={MainRoutes}/>

      </Wrapper>

      */