import {mail, location, phone, uses01, uses02, uses03, uses04} from "../assets/images"

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