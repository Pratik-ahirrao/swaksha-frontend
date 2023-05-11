import React from 'react';

import img from "./404.png";
import './error404.css';
function error() {


    return (
        <div>
     {/* <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up"> */}
                <img src={img} className="myimg" alt="" />
              {/* </div> */}
      </div>
  );
}

export default error;
