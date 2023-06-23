import React from 'react';
import { cards } from '../constants/constants';
import Banner from './Banner';
import { vector6 } from '../assets/images';

const Cards = () => {
  return (
    <section id="services" className="flex md:flex-col flex-col item-center justify-center">
      <div className="md:flex-row flex-col item-center justify-center sm:flex hidden">
      <div className="flex flex-row items-center justify-center ">
        {cards.map((card) =>(
        <div id={card.id} key={card.id} className="p-4 card-gradient m-4 flex flex-col rounded-3xl items-center">
          <img src={card.image} className="rounded-full m-6 w-[250px]" alt={card.heading}/>
          <p className="text-white items-center font-montserrat font-bold text-[24px]">{card.heading}</p>

          <p className="text-white text-[14px] font-montserrat">{card.description}</p>

          

          <form action={card.url} target="_blank">
            <button className="sm:flex button-gradient text-[14px] font-bold py-2 px-5 rounded-full text-color mt-2" >{card.button}
            </button>
          </form>
        </div>
        ))}
      </div>
    </div>
    <Banner />

    
    </section>
    
  )
}

export default Cards