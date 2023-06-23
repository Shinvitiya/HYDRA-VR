import React from 'react'
import { arrow } from '../assets/images'

const Paragraph = (props) => {
  return (
    <section id={props.id} className="flex md:flex-row flex-row item-center justify-center mt-10 lg:mt-20"> 

    {/* ----------------------------HEADINGS----------------------------------------------- */} 
      <div className="flex items-start flex-col xl:px0 sm:px16 px-6">

        <div className="flex-1 flex flex-row xl:px0 sm:px16">
          <p className="text-white font-montserrat font-bold text-[36px]">{props.heading}</p>
        </div>

        <div className="flex-1 flex flex-row justify-center items-center xl:px0 sm:px16 pb-8">
          <p className="text-white font-montserrat text-[36px]">{props.subHeading}</p>
          <img src={arrow} alt="arrow" className="w-[160 px] ml-5 md:flex hidden" />
        </div>

      </div>

{/* ----------------------------Description----------------------------------------------- */}
      <div className="flex-1 md:flex hidden justify-center items-center flex-col xl:px0 sm:px16 px-6 mb-5">
        <p className="text-white font-montserrat text-[16px]">{props.description}</p>

      </div>

    </section>
  )
}

export default Paragraph