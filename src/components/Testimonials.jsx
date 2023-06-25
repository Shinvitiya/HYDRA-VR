import React, {useState} from 'react'
import { technologies } from '../constants/constants'
import TestimonialCaraousel from './TestimonialCaraousel'

const Testimonials = () => {
  return (
    <section className="flex md:flex-row flex-col item-center justify-center">
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

        <TestimonialCaraousel />
      </div>

    </section>
  )
}

export default Testimonials