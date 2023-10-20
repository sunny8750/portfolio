import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Whatsapp( { 
}) {

  return (
    <div className="App">
    <FloatingWhatsApp
      phoneNumber="9315887944"
      accountName="WebYourTech"
      notification
      notificationSound
    />
  </div>
  )
}
export default Whatsapp;