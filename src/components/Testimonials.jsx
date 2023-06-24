import React, {useState} from 'react'
import { testimonials } from '../constants/constants'
import TestimonialCaraousel from './TestimonialCaraousel'

const Testimonials = () => {
  return (
    <section className="flex md:flex-row flex-col item-center justify-center">
      <div className="sm:flex hidden flex:col items-center">
        {testimonials.map((testimonial) =>{
          return(
            <div key={testimonial.id} className="mx-7">
              <img src={testimonial.image}/>
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