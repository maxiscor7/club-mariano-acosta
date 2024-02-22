import React from 'react'
import Footer from '../../components/Footer'
import NavBrowser from '../../components/NavBrowser'

export default function Hockey() {
  return (
    <div>
      <NavBrowser />
      <div style={{ width: '100%', height: '600px' }}>
        <h1>Hockey</h1>
      </div>
      <Footer />
    </div>
  )
}
