import React from 'react'
import { logo } from '../assets/images'
import { footerItems1, footerItems2, socialIcons, footerText} from '../constants/constants'
import Button from './Button'

const Footer = () => {
  return (
    <section className="flex flex-col justify-center">
        <div className="md:grid sm:grid-cols-4">
            <div className="flex items-center justify-center">
                <img src={logo}/>
            </div>

            <div>
                {footerItems1.map((item) =>{
                    return(
                        <a className="font-montserrat font-bold text-[16px]  text-white md:flex hidden py-2"
                         key={item.id} href={item.url}>{item.title}</a>
                    )
                })}
                
            </div>

            <div>
            {footerItems2.map((item) =>{
                    return(
                        <a className="font-montserrat font-bold text-[16px]  text-white md:flex hidden py-2" key={item.id} href={item.url} target="_blank">{item.title}</a>
                    )
                })}
            </div>

            <div className="items-center flex flex-col">
                <p className="font-montserrat font-bold text-[16px]  text-white items-center">SOCIALIZE WITH HYDRA</p>
                <div className="flex flex-row items-start my-4">
                    {socialIcons.map((icon) =>{
                        return(
                                <img src={icon.image} key={icon.id} alt={icon.id} className="mx-2 cursor-pointer "/>
                            
                            
                        )
                    })}
                </div>
                <Button  text="BUILD YOUR WORLD"/>
            </div>

        </div>
        <hr className="mt-5"/>
        <footer className="items-center justify-center flex my-5">
            <span className="font-montserrat font-bold text-[12px] text-white" >{footerText}</span>
        </footer>
    </section>
  )
}

export default Footer