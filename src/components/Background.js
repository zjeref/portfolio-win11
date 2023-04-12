import React from 'react'
import bg from '../assets/wallpaper1.jpg'

const Background = () => {
  return (
    <div
      className="fixed -z-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
      }}
    />
  )
}

export default Background
