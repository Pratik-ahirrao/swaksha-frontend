import React from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import img from '../framework-logo.png';
import './otp.css';
import { height } from '@mui/system';
function App() {
    let navigate = useNavigate(); 
    const location = useLocation();
    let registerationDetails = location.state;
    // console.log(location.state);
    const routeToDashboard = (e) =>{ 
        registerationDetails.otp=otp.join("");
        console.log(registerationDetails);
        // axios.post("http://localhost:9005/api/v1/auth/verify-otp",{
        // registerationDetails
        // }).then(()=>{
        //   let path = `/dashboard`; 
        //   navigate(path);
        // }
        // )
        
       
      }
    
    const [otp, setOtp] = useState(new Array(6).fill(""));
   
    const handleChange = (element, index) => {
        if(isNaN(element.value))
            return false;
        
            setOtp([...otp.map((d, idx) => (idx == index) ? element.value : d )]);

            if (element.nextSibling) {
                element.nextSibling.focus();
            }
    };

  return (
    <MDBContainer className="gradient-form" id="outer">

      <MDBRow id="row">

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '185px'}} alt="logo" /> */}
              <h4 className="mt-1 mb-5 pb-1" >Enter the OTP sent to you to your phone number</h4>
            </div>



            <div className='form-details'>
                    {
                        otp.map((data, index) => {
                        return (
                            <input
                                className='otp-field'
                                type= "text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e=>e.target.select()}
                                />
                        );
                        })
                    }
                    </div>

                    {/* <button onClick={
                    // (e) => {
                    // verify(e);
                    // }
                    routeToDashboard
                    
                    }>Verify</button> */}
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={routeToDashboard}>Verify</MDBBtn>
            </div>

           

          </div>

        </MDBCol>

        <MDBCol col='6' >
          <div className="gradient-custom-2 ">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h1>Enter the OTP sent to you to your phone number</h1>
              <p class="small mb-0">ABHA ID will be generated once otp is verified!
              </p>
            </div>

          </div>

        </MDBCol>
        {/* <div className="overlay-container">
                <div className="overlay">
                <div className="overlay-panel overlay-right">
                     <img src={img } />

                    <p>Clinic app for patient</p>
                </div>
                </div>
            </div> */}

      </MDBRow>

    </MDBContainer>
  );
}

export default App;