import React from 'react'

const Button = (props) => {
  return (
    <button className="sm:flex hidden button-gradient text-[12px] font-bold py-2 px-8 rounded-full text-color mx-5 z-[2]" >
        {props.text}
      </button>
  )
}

export default Button