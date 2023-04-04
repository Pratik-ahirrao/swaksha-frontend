import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './signup.css';
import { useNavigate } from "react-router-dom";

function App(){
    let navigate = useNavigate(); 

    const routeToLogin = () =>{ 
        let path = `/`; 
        navigate(path);
      }

      const routeToVerifyOtp = () =>{ 
        let path = `/verifyOtp`; 
        navigate(path);
      }
    return (
        <div className='outer' >
            <div className="wrapper">
        <div className="title">Registration</div>
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input type="text" placeholder="Enter your First name" required />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input type="text" placeholder="Enter your Last name" required />
            </div>
            <div className="input-box">
              <span className="details">E-Mail</span>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="number" placeholder="Enter your number" required />
            </div>

            <div className="input-box">
              <span className="details">Address</span>
              <input type="text" placeholder="Enter your Address" required />
            </div>
            <div className="input-box">
              <span className="details">City</span>
              <input type="text" placeholder="Enter your City" required />
            </div> 
            <div className="input-box">
              <span className="details">State</span>
              <input type="text" placeholder="Enter your State" required />
            </div>

            <div className="input-box">
              <span className="details">DOB</span>
              <input type="date"  required />
            </div>
            
            <div className="input-box">
              <span className="details">CM Pin</span>
              <input type="password" placeholder="Enter your CM pin" required />
            </div>
            <div className="input-box">
              <span className="details">Confirm CM Pin</span>
              <input type="password" placeholder="Confirm your CM pin" required />
            </div>

            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" placeholder="Enter your Password" required />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input type="password" placeholder="Confirm your Password" required />
            </div>
          </div>
          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one" />
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two" />
                <span className="gender">Female</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three" />
                <span className="gender">Prefer Not to say</span>
              </label>
            </div>        
          </div>
          <div className="button">
            <input type="submit" onClick={routeToVerifyOtp} defaultValue="Register" />
          </div>
        </form>
        <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="" className="link-danger" onClick={routeToLogin} >Login</a></p>

      </div>
        </div>
        
    )
}

export default App;