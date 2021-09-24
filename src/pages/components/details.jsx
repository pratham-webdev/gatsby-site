import React from "react";

function Details(props) {
  return (
    <div className="container pt-5">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
}

export default Details;
