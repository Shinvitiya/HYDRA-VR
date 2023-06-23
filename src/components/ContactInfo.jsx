import React, {useState}from 'react';
import { contactInfo } from '../constants/constants'
import { chevronRight, chevronLeft } from '../assets/images';

const ContactInfo = () => {
  const [index, setIndex] = useState(0);
  
  return (
    <section className="flex flex-col md:flex-row items-center justify-center">
      <div className="flex-1 justify-center items-center flex-row box-gradient xl:px0 sm:px16 px-4 z-[2] rounded-full py-8 sm:flex hidden">
        {contactInfo.map((contact, index) =>(
          
          <div key={contact.id} className={`${index===2? "none" : "border-r-2"} flex flex-1 flex-row items-center justify-center`}>

            <div className="flex flex-col items-start px-3 justify-center">
              <img src={contact.photo} alt={contact.title}/>
            </div>
            <div className={`flex flex-col px-3 mx-3 items-start`} >
              <p className="text-white text-[24px] font-bold">{contact.title}</p>
              <p className="text-white text-[14px]">{contact.content}</p>
            </div>

          </div>
        ))}
        

      </div>
      <div className="flex-1 justify-center items-center box-gradient xl:px0 sm:px16 px-2 z-[2] rounded-full py-2 sm:hidden flex w-full">
          
          <div className="flex flex-1 flex-row items-center justify-center">
          <div className="flex flex-col items-end px-2 justify-end">
              <img src={chevronLeft} alt="chevron-left" className="w-[50px] cursor-pointer" onClick={() =>setIndex((prev) =>(prev === 0 ? 2 : (prev - 1)))} />
            </div>

            <div className="flex flex-col items-start px-3 justify-center">
              <img src={contactInfo[index].photo} alt={contactInfo[index].title} className="w-[50px]"/>
            </div>
            <div className="flex flex-col items-start justify-center px-2 h-[50px] w-[200px]" >
              <p className="text-white text-[14px]">{contactInfo[index].content}</p>
            </div>
            <div className="flex flex-col items-end px-3 justify-end">
              <img src={chevronRight} alt="chevron-right" className="w-[50px] cursor-pointer relative" onClick={() =>setIndex((prev) =>(prev === 2 ? 0 : (prev + 1)))}/>
            </div>

          </div>
        

      </div>


    </section>
  )
}

export default ContactInfo