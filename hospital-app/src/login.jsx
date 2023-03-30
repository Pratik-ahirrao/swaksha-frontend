import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './login.css';
import img from './hospital.jpg';
import { useNavigate } from "react-router-dom";

function App() {
    let navigate = useNavigate(); 

    const routeToSignup = () =>{ 
        let path = `/signup`; 
        navigate(path);
      }
    
      const routeToDashboard= () =>{ 
        let path = `/dashboard`; 
        navigate(path);
      }

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='5'>
          <img src={img} class="img-fluid" alt="Sample image" />
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
          <MDBInput wrapperClass='mb-4' label='Doctor SSID' id='formControlLg' type='email' size="lg" />
          <MDBInput wrapperClass='mb-4' label='Password' id='second' type='password' size="lg"/>

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