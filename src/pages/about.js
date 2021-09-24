import React from "react";
import Main from "./components/main";

const aboutPage = {
    title:"About",
    desc:"This is the about page for the Gatsby Tutorial."
  }

const AboutPage = () => {
  return(
    <Main title={aboutPage.title} desc={aboutPage.desc}/>
  )
}

export default AboutPage;