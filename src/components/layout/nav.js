import React from 'react';

export default function Nav() {
  return (
    <header style={headerStyle}>
      <h1 className='nav'>Student Resources</h1>
    </header>
  )
}

const headerStyle ={
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '0.15rem'
}