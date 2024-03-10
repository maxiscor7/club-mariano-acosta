import React from 'react'
import Footer from '../components/Footer'
import underConstruccion from '../assets/underConstruccion.png'
import NavBrowserBst from '../components/NavBrowserBst'

export default function Rock() {
  return (
    <div>
      <NavBrowserBst />
      <div className='container-under-contruccion'>
        <img src={underConstruccion} alt='' />
      </div>
      <Footer />
    </div>
  )
}
