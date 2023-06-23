import React from 'react';
import { banner } from '../constants/constants';
import { chevron } from '../assets/images';

const Banner = () => {
  return (
    <div className="items-center flex flex-row justify-center relative">
      <div className="flex flex-1 items-center justify-center flex-col banner-gradient w-[10ovw] rounded-full sm:pt-20 sm:pb-20 pb-10 pt-10  mt-8 mb-8">
      <p className="text-white items-center font-montserrat font-bold sm:text-[36px] text-[16px]">{banner.heading}</p>

      <p className="text-white sm:text-[36px] text-[24px] font-montserrat">{banner.subHeading}</p>

      <div className="button-gradient rounded-full absolute sm:bottom-2 bottom-6">
        <img src={chevron} className="ss:w-[50px] w-[23px]"/>
      </div>


     </div>
     
     
    

    </div>
  )
}

export default Banner