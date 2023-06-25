import {mail, location, phone, uses01, uses02, uses03, uses04, testimonial1, 
  testimonial2, testimonial3, testimonial4, facebook, twitter, linkedin, youtube, instagram, pinterest} from "../assets/images"

export const navLinks = [
    {
      id: "about",
      title: "ABOUT",
    },
    {
      id: "services",
      title: "SERVICES",
    },
    {
      id: "technologies",
      title: "TECHNOLOGIES",
    },
    {
      id: "how-to",
      title: "HOW TO",
    },
  ];

  export const contactInfo = [
    {
      id: "address",
      title: "Pay Us a Visit",
      content: "Union St, Seattle, WA 9101, United States",
      photo: location
    },
    {
        id: "call",
        title: "Give Us a Call",
        content: "(110) 111-1010",
        photo: phone
    },
    {
        id: "email",
        title: "Send Us a Message",
        content: "Contact@Hydra VTech.com",
        photo: mail
      },

  ];

  export const introduction ={
    id : "introduction",
    heading: "INTRODUCTION",
    subHeading: "TO HYDRA VR",
    description: "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
  }

  export const build ={
    id : "build",
    heading: "WHY BUILD",
    subHeading: "WITH HYDRA?",
    description: "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
  }

  export const cards =[{
    id: "simulation",
    heading: "SIMULATION",
    description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    button: "TRY IT NOW",
    image: uses01
  },
  {
    id: "education",
    heading: "EDUCATION",
    description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    button: "TRY IT NOW",
    url: "https://youtu.be/dQw4w9WgXcQ",
    image: uses03
  },
  {
    id: "self-care",
    heading: "SELF-CARE",
    description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    button: "TRY IT NOW",
    url: "https://youtu.be/dQw4w9WgXcQ",
    image: uses04
  },
  {
    id: "outdoor",
    heading: "OUTDOOR",
    description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    url: "https://youtu.be/dQw4w9WgXcQ",
    button: "TRY IT NOW",
    image: uses02
  }
]

export const banner ={
    heading: "TECHNOLOGIES & HARDWARE",
    subHeading: "USED BY HYDRA VR."
}

export const technologies =[{
  id: "unreal-engine-logo",
  image: testimonial1
},
{
  id: "unity-logo",
  image: testimonial2
},
{
  id: "oculus-logo",
  image: testimonial3
},
{
  id: "vive-logo",
  image: testimonial4
}
]

export const howWeBuild ={
  id : "how-we-build",
  heading: "HOW WE BUILD",
  subHeading: "WITH HYDRA VR?",
  description: "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
}

export const footerItems1 =[{
  id: "about",
  title: "ABOUT",
  url: "#about"
},
{
  id: "services",
  title: "SERVICES",
  url: "#services"
  
},
{
  id: "technologies",
  title: "TECHNOLOGIES",
  url: "#technologies"
},
{
  id: "how-to",
  title: "HOW TO",
  url: "#how-to"
},
{
  id: "join-hydra",
  title: "JOIN HYDRA",
  url: "#join-hydra"
},
]

export const footerItems2 =[{
  id: "faq",
  title: "F.A.Q",
  url: "https://www.w3.org/Provider/Style/dummy.html"
},
{
  id: "sitemap",
  title: "SITEMAP",
  url: "https://www.w3.org/Provider/Style/dummy.html"
},
{
  id: "conditions",
  title: "CONDITIONS",
  url: "https://www.w3.org/Provider/Style/dummy.html"
},
{
  id: "licencses",
  title: "LICENSES",
  url: "https://opensource.org/license/mit/"
},
]

export const socialIcons =[{
  id: "facebook",
  image: facebook,
  url: "https://www.facebook.com/"
},
{
  id: "twitter",
  image:twitter,
  url: "https://www.twitter.com/" 
},
{
  id: "linkedin",
  image: linkedin,
  url: "https://www.linkedin.com/"
},
{
  id: "youtube",
  image: youtube,
  url: "https://www.youtube.com/"
  
},
{
  id: "instagram",
  image: instagram,
  url: "https://www.instagram.com/"
},
{
  id: "pinterest",
  image: pinterest,
  url: "https://www.pinterest.com/"
},
]

export const footerText = new Date().getFullYear() + " © HYDRA LANDING PAGE - ALL RIGHTS RESERVED"