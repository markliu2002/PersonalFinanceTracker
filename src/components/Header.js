// THIS COMPONENT IS THE HEADER THAT SAYS 'Finance Tracker'

import React from 'react'

export default function Header() {
  return (
    <div>
      <header style={headerStyle}>
        Finance Tracker
      </header>
    </div>
  )
}

// CAN USE VARIABLES FOR STYLING, we don't need {{}} only need {}. The style of the Header is set to this
const headerStyle = {
  background: '#07617D',
  color: '#fff',
  fontSize: '30px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '30px'
// #F9A828 < mustard yellow
// #ECECEB < white
// #07617D < navy blue
// #2E383F < dark blue
}

