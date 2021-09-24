import React from "react";
import Main from "./components/main";

const mainPage = {
  title:"Home",
  desc:"I'm making this by following the Gatsby Tutorial."
}

const IndexPage = () => {
  return(
    <Main title={mainPage.title} desc={mainPage.desc}/>
  )
}

export default IndexPage;