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
import { setAuthToken } from './setAuthToken';
import { useTranslation } from "react-i18next";

function App() {
    let navigate = useNavigate(); 
    const location = useLocation();
    const { t } = useTranslation();
    let registerationDetails = location.state;
    // console.log(location.state);
    const routeToDashboard = (e) =>{ 
        registerationDetails.otp=otp.join("");
        registerationDetails.role="USER"
        console.log(registerationDetails);
        axios.post("http://localhost:9005/api/v1/auth/verify-otp",
        registerationDetails
        ).then((resp)=>{
          let path = `/dashboard`; 
          localStorage.setItem("user", JSON.stringify(resp.data));
          setAuthToken(resp.data.token);
          navigate(path);
        }
        )
        
       
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
              <h4 className="mt-1 mb-5 pb-1" >{t("enter_the_otp")}</h4>
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
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={routeToDashboard}>{t("verify")}</MDBBtn>
            </div>

           

          </div>

        </MDBCol>

        <MDBCol col='6' >
          <div className="gradient-custom-2 ">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h1>{t("enter_the_otp")}</h1>
              <p class="small mb-0">{t("ssid_will_be_verified")}
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