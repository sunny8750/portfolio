import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Whatsapp( { 
}) {

  return (
    <div className="App">
    <FloatingWhatsApp
      phoneNumber="8447653414"
      accountName="Web Your Tech"
      notification
      notificationSound
    />
  </div>
  )
}
export default Whatsapp;