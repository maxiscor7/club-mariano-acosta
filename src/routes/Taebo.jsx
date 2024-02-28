import React from 'react'
import NavBrowser from '../components/NavBrowser'
import Footer from '../components/Footer'

export default function Taebo() {
  return (
    <div>
      <NavBrowser />
      <div style={{ width: '100%', height: '600px', backgroundColor: '#1C3168'  }}>
        <h1>Taebo</h1>
      </div>
      <Footer />
    </div>
  )
}
