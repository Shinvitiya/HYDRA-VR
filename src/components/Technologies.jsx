import React, {useState} from 'react'
import { technologies } from '../constants/constants'
import TechnologiesCarousel from './TechnologiesCarousel'
// import { Technologies } from './components'

const Technologies = () => {
  return (
    <section className="flex md:flex-row flex-col item-center justify-center" id="technologies">
      <div className="sm:flex hidden flex:col items-center">
        {technologies.map((technology) =>{
          return(
            <div key={technology.id} className="mx-7">
              <img src={technology.image}/>
            </div>
          )
        })}
      </div>
      <div className="sm:hidden flex flex:col items-center justify-center">

        <TechnologiesCarousel />
      </div>

    </section>
  )
}

export default Technologies