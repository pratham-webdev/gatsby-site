import React from "react";
import Main from "./components/main";
import { graphql, useStaticQuery } from "gatsby";
import Images from "./components/images";

const IndexPage = () => {
  const mainPage = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (<div>
    <Main title={mainPage.site.siteMetadata.title} desc={mainPage.site.siteMetadata.description} />
  <Images />
  </div>)

};

export default IndexPage;
