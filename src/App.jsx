import React from 'react'
import {About, Banner, Build, Cards, ContactInfo, Form, Hero, Introduction, Navbar, Paragraph, Testimonials
} from "./components/components"
import { introduction, build } from './constants/constants'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden overscroll-contain">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <ContactInfo />
          <Paragraph
           key={introduction.id}
           id = {introduction.id}
           heading={introduction.heading}
           subHeading={introduction.subHeading}
           description={introduction.description}/>

          <About />

          <Paragraph 
            key={build.id}
            id = {build.id}
            heading={build.heading}
            subHeading={build.subHeading}
            description={build.description}
          />
          <Cards />
          <Testimonials />
        </div>
      </div>
      
    </div>
  )
}

export default App;