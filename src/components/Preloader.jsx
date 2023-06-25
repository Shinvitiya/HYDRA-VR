import React from 'react'
import { preload } from '../assets/images'

const Preloader = () => {
  return (
    <div className="bg-white w-full h-full flex items-center flex-col justify-center absolute animate-pulse">
        <img src={preload}/>
    </div>
  )
}

export default Preloader