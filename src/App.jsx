import React, {useEffect, useState} from 'react'
import {About, Cards, ContactInfo, Form, Hero, HowTo, Navbar, Paragraph, Technologies, Preloader, Footer
} from "./components/components"
import { introduction, build, howWeBuild } from './constants/constants'
const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 5000)
  }, [])

  // Renders website after displaying preloader

  return ( 
    <div className="bg-primary w-full overflow-hidden overscroll-contain">
    {loading ? 
      <Preloader /> :
      <React.Fragment>
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

          <Technologies />

          {/* Coming Soon */}

          {/* <Paragraph
           key={howWeBuild.id}
           id = {howWeBuild.id}
           heading={howWeBuild.heading}
           subHeading={howWeBuild.subHeading}
           description={howWeBuild.description} 
          /> */}


          <Footer />

          

          
        </div>
      </div>
      </React.Fragment>
      
    }
      
      
    </div>
  )
}

export default App;