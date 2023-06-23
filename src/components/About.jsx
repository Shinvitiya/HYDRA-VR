import React from 'react';
import { mask02 } from '../assets/images';
import Button from './Button';

const About = () => {
  return (
    <section className="flex md:flex-row flex-col item-start justify-center background-section" id="about">
      <div className="flex flex-col md:flex-row justify-center items-center xl:px0 sm:px16 px-6 z-[2] ">
        <div className="items-start justify-start flex ss:m-10">
          <img src={mask02} alt="vr-user" className="md:w-[200vw] w-[1000px]"/>
        </div>
        <div className="items-start justify-start flex flex-col">
          <p className="text-white font-montserrat text-[36px] font-bold sm:flex hidden">ABOUT</p>
          <p className="text-white font-montserrat text-[36px] sm:flex hidden">HYDRA VR</p>
          <p className="text-white font-montserrat text-[16px] sm:mt-6 mt-3">
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <button className="sm:flex button-gradient text-[16px] font-bold py-3 px-8 rounded-full text-color mt-4 sm:self-start self-center" >LET'S GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  )
}

export default About