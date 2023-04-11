import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './login.css';
import img from './hospital2.jpg';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';
import { setAuthToken } from '../setAuthToken.js';

function App() {
    let navigate = useNavigate(); 
    let [ssid,setssid]=useState("");
    let [password, setpassword] = useState("");
    const routeToSignup = () =>{ 
        let path = `/signup`; 
        navigate(path);
      }
    
      const routeToDashboard= (e) =>{ 
        e.preventDefault();
        const dat =  {
          "ssid": ssid,
          "password": password,
        }
        console.log(dat);
        axios.post("http://localhost:9002/auth/authenticate",
        dat
        ).then((resp)=>{
          console.log(resp)
          localStorage.setItem("user", JSON.stringify(resp.data));
          setAuthToken(resp.data.token);
          let path = '/dashboard'; 

          navigate(path);
        }
        )
      }

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='5'>
          <img src={img} class="img-fluid" alt="Sample image" width={500} />
        </MDBCol>
        
        <MDBCol col='4' md='5' >

          <div className="d-flex flex-row align-items-center justify-content-center" id='main' paddingLeft="50px">
          {/* <img src={img1} class="img-fluid" alt="Sample image" /> */}

            <p className="lead fw-normal mb-0 me-3" id='signin'>Log in with</p>
            
            {/* <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn> */}

          </div>

          {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}
          <MDBInput wrapperClass='mb-4' label='Doctor SSID' id='formControlLg' type='email' onChange={(e)=>{setssid(e.target.value)}} size="lg" />
          <MDBInput wrapperClass='mb-4' label='Password' id='second' type='password' onChange={(e)=>{setpassword(e.target.value)}} size="lg"/>

          {/* <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div> */}
          {/* <div className="button">
            <input type="submit" defaultValue="Register" onClick={routeToSignup}/>
          </div> */}
          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={routeToDashboard} >Login</MDBBtn>
          </div>
          
        </MDBCol>

      </MDBRow>

     

    </MDBContainer>
  );
}

export default App;