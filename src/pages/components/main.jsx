import React from "react";
import Nav from "./navbar";
import Details from "./details";

function Main(props) {
  return (
    <div>
      <Nav />
      <Details title={props.title} desc={props.desc} />
    </div>
  );
}

export default Main;
