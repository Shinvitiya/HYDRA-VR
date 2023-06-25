import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import {ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline"
import { testimonials } from '../constants/constants';


{/* Caraousel for  testimonials on mobile view */}

const TestimonialCaraousel = () => {
  return (
    <div className="flex items-center flex-col">
      <Carousel className="rounded-xl items-center " prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="md"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4 button-gradient rounded-full"
        >
          <ChevronLeftIcon strokeWidth={2} className="w-6 h-6 chevron-color" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="md"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 !right-4 button-gradient rounded-full"
        >
          <ChevronRightIcon strokeWidth={2} className="w-6 h-6 chevron-color" />
        </IconButton>
      )} >
        
        {testimonials.map((testimonial) =>{
          return(
            <div className="flex items-center flex-col" key={testimonial.id}>
            <img
          src={testimonial.image}
          alt={testimonial.id}
          className="w-[200px] object-contain mb-6"
        />
        </div>
          )
        })}
        
      
      
    </Carousel>
    </div>
    
  )
}

export default TestimonialCaraousel