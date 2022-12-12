import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import { useEffect } from 'react';
import tawkTo from "tawkto-react";

export const Layout = ({children}) => {

  const tawkToPropertyId = '61174f86649e0a0a5cd1120e'

  const tawkToKey = '1fd1gta4s'
  
  useEffect(() => {
      tawkTo(tawkToPropertyId, tawkToKey)
  }, [])

  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
