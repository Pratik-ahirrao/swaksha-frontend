import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './verifyOtp.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
// import axios from 'axios';
import img from '../framework-logo.png';
import { useTranslation } from "react-i18next";

function App(){
    let navigate = useNavigate(); 
    const { t } = useTranslation();

    const routeToDashboard = () =>{ 
        let path = `/dashboard`; 
        navigate(path);
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

    const verify = (e)=>{
        e.preventDefault();
        console.log(localStorage.getItem('phone'))
        const obj = {
            "mobile_number": localStorage.getItem('phone'),
            "otp": otp.join("")
        }
        console.log(obj);
        
        // axios.post('http://localhost:8999/gateway/auth/verify-otp', obj)
        // .then((res) => {
        //     console.log(res);
        //     alert("otp is verified!!")
        //     console.log(res.data);
        // })
        // .catch(
        //     (e) => {
        //     console.log(e);
        //     }
        // )
        }


    return (
        <div className='outer1'>
        <link rel="stylesheet" href="verifyOtp.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="container" id="container">
            <div className="form-container log-in-container">
                <form action="#">
                <h1>{t("enter_the_otp")}</h1>
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
                
                <button onClick={
                    // (e) => {
                    // verify(e);
                    // }
                    routeToDashboard
                    
                    }>{t("verify")}</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                <div className="overlay-panel overlay-right">
                     <img src={img } />

                    <p>{t("clinic_app_for_patient")}</p>
                </div>
                </div>
            </div>
            </div>
    </div>
    )
}

export default App;