import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function Images() {
  return (
    <div className="container p-3">
      <div className="row">
        {/* {imageArray.map(imageGrid)} */}
        <div className="col-4">
          <StaticImage alt="" src="../../images/01.jpg" />
        </div>
      </div>
    </div>
  );
}

// function imageGrid(el){
//     return <div className="col-4">
//         <img className="img-fluid"
//         alt={el.alt}
//         src="images/01.jpg"
//       />

//     </div>
// }

// const imageArray = [
//     {
//         id:1,
//         alt:`Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera`,
//         src:`../../images/01.jpg`
//     },
//     {
//         id:2,
//         alt:`Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera`,
//         src:`../../images/01.jpg`
//     },
//     {
//         id:3,
//         alt:`Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera`,
//         src:`../../images/01.jpg`
//     },
// ]

export default Images;
