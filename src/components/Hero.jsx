import React from 'react'
import { mask01, smallArrow, vector1, vector2, vector3} from '../assets/images';
import ContactInfo from './ContactInfo';

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col item-center justify-center" >
      <div className="flex-1 flex justify-center items-center flex-col xl:px0 sm:px16 px-6 z-[2] order-2 md:order-1">

        <div className="flex flex-row items-center py-[6px] mb-2">
          <p className="text-white ss:text-[52px] text-[38px] font-montserrat font-semibold"> <span className="text-gradient ss:text-[62px] text-[45px]">Dive</span> into the Depths <br className="hidden sm:block" /> of <span className="text-gradient ss:text-[62px] text-[45px]">Virtual Reality</span></p>
        </div>

        <div className="flex flex-row items-center py-[6px] mb-2">
          <p className="sm:flex hidden text-left text-[20px] text-white font-montserrat max-w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .
          </p>
        </div>

        <div className="flex flex-row items-center py-[6px] mb-2">
          <div className="flex flex-col">
          <button className="sm:flex button-gradient text-[16px] font-bold py-4 px-8 rounded-full text-color" >BUILD YOUR WORLD
          </button>

          </div>

          <div className="flex flex-col flex-1">
            <img src={smallArrow} alt="small-arrow-right" className="sm:flex hidden w-[80px]"/>
          </div>
          

         
        </div>
      </div>

{/* -----------------HeroImage----------------------------------------------------------- */}
      <div className="flex-1 flex justify-center items-center flex-col xl:px0 sm:px16 px-6 relative order-1 md:order-2">
        <img src={vector1} className=" absolute z-[0]" alt="vector-line"/>
        <img src={vector2} className=" absolute z-[0]" alt="vector-line"/>
        <img src={vector3} className=" absolute z-[0]" alt="vector-line"/>
        <img src={mask01} className="md:w-[554px] w-[100vw] drop-shadow-2xl my-6 z-[0] "/>
      

      </div>     
{/* --------------------------------------------------------------------------------------- */}
    </section>
  )
}

export default Hero