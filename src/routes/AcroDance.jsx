import React from 'react'
import NavBrowser from '../components/NavBrowser'
import Footer from '../components/Footer'
import underConstruccion from '../assets/underConstruccion.png'

export default function AcroDance() {
  return (

    <div>     
      <NavBrowser/>
      <div className='container-under-contruccion'>
        <img src={underConstruccion} alt='' />
      </div>
      <Footer/>
    </div>
  )
}
