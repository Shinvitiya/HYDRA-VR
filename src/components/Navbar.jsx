import React, {useState} from 'react';
import {logo, hydra, hamburger} from "../assets/images";
import {navLinks} from "../constants/constants";
import Button from "./Button"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full justify-center flex items-center my-3">
      <img src={logo} alt="hydra-logo" className="md:w-[102px] h-[103px] z-[2] w-[20vw]" />
      <img src={hydra} alt="hydra" className="md:w-[76px] h-[46px] z-[2] w-[15vw]" />
      <ul className="list-none sm:flex hidden justify-center items-center flex-1 z-[2]">
        {navLinks.map((nav, index)=>(
          <li
          key={nav.id}
          className = {`font-montserrat font-semibold cursor-pointer text-[12px] ${index === navLinks.length -1? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href= {`#${nav.id}` }>{nav.title}</a>
          </li>
        ))}
      </ul>

      <button className="sm:flex hidden border-solid border-white border-[3px] text-white rounded-full text-[12px] font-bold py-2 px-8 z-[2]">
        Contact Us
      </button>
      <Button text="JOIN HYDRA"/>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img src={hamburger}  alt="menu" 
            className="w-[28px] h-[28px] object-contain z-[2]"
            onClick = {() =>setToggle((prev) =>(!prev))}
          />

          <div className={ `${ toggle ? "flex" : "hidden"} p-6 absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl sidebar purple-gradient z-[2]`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index)=>(
            <li
            key={nav.id}
            className = "font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white"
            >
              <a href= {`#${nav.id}` }>{nav.title}</a>
            </li>
          ))}
            </ul>
          </div>
      </div>

    </nav>

  )
}

export default Navbar