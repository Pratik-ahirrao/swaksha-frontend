import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './login.css';
import img from './patient.jpg';
// import img1 from './logo1.png';
import { Navigate,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import "../setAuthToken.js";
import { setAuthToken } from '../setAuthToken.js';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

/*firebase daniel start*/
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCCxB1aAQLHWk1vAQPS_YVdBujy05VkMCM",
  authDomain: "swaksha-7e825.firebaseapp.com",
  projectId: "swaksha-7e825",
  storageBucket: "swaksha-7e825.appspot.com",
  messagingSenderId: "476499142717",
  appId: "1:476499142717:web:bc85113a0876ed39bca254",
  measurementId: "G-D7VXY3WK2F"
};
const fapp = initializeApp(firebaseConfig);
const messaging = getMessaging(fapp);

getToken(messaging, {
  vapidKey:
    "BNKN9aTqoR6lBcRhl0e3PY_-bFsX1sC5Seyi0VtM7FxTGPvq5TY9mzhOrVL93IcgryXJ01ca3nry_HQ0vRqGCJQ",
})
  .then((currentToken) => {
    if (currentToken) {
      console.log("Firebase Token", currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

/*firebase daniel end*/

// const firebaseConfig = {
//   apiKey: "AIzaSyCCxB1aAQLHWk1vAQPS_YVdBujy05VkMCM",
//   authDomain: "swaksha-7e825.firebaseapp.com",
//   projectId: "swaksha-7e825",
//   storageBucket: "swaksha-7e825.appspot.com",
//   messagingSenderId: "476499142717",
//   appId: "1:476499142717:web:785e5ef58732f7c7bca254",
//   measurementId: "G-3V7D6P0JMG"
// };

// const app = firebase.initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// function initFirebaseMessagingRegistration() {
//   // Don't forget your vapidKey here
//   getToken(messaging, { vapidKey: "BNKN9aTqoR6lBcRhl0e3PY_-bFsX1sC5Seyi0VtM7FxTGPvq5TY9mzhOrVL93IcgryXJ01ca3nry_HQ0vRqGCJQ" })
//     .then((t) => {
//       console.log(`Token is ${t}`);
//     })
//     .catch(function (err) {
//       console.log("Didn't get notification permission", err);
//     });

//   onMessage(messaging, (payload) => {
//     console.log("Message received. ", JSON.stringify(payload));
//     // notificationElement.innerHTML =
//     //   notificationElement.innerHTML + " " + payload.data.notification;
//   });
// }

// const requestPermission = async () => {
//   messaging.requestPermission().then(() => {
//     console.log('Notification permission granted.');
  
//     messaging.getToken().then((token) => {
//       console.log('Registration token:', token);
//     }).catch((error) => {
//       console.log('Unable to get registration token.', error);
//     });
//   }).catch((error) => {
//     console.log('Unable to get permission to notify.', error);
//   });
// }

function App() {
    let navigate = useNavigate(); 
    let [ssid,setssid]=useState("");
    let [password, setpassword] = useState("");
    const routeToSignup = () =>{ 
        let path = `/signup`; 
        navigate(path);
      }

      const routeToDashboard = (e) =>{ 
        e.preventDefault();
        const dat =  {
          "ssid": ssid,
          "password": password,
        }
        console.log(dat);
        axios.post("http://localhost:9001/patient/authenticate",
        dat
        ).then((resp)=>{
          console.log(resp)
          localStorage.setItem("user", JSON.stringify(resp.data));
          setAuthToken(resp.data.token);
          let path = '/dashboard'; 

          navigate(path, dat);
        }
        ).then(
          console.log("hello")
        )
        
      }

      useEffect(()=>{
        getToken(messaging, {
          vapidKey:
            "BNKN9aTqoR6lBcRhl0e3PY_-bFsX1sC5Seyi0VtM7FxTGPvq5TY9mzhOrVL93IcgryXJ01ca3nry_HQ0vRqGCJQ",
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log("Firebase Token", currentToken);
            } else {
              // Show permission request UI
              console.log(
                "No registration token available. Request permission to generate one."
              );
              // ...
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // ...
          });
        
        onMessage(messaging, (payload) => {
          console.log("Message received. ", payload);
          // ...
        });
      }, []);
    
      // useEffect(()=>{initFirebaseMessagingRegistration();}, [])
	  
	  // useEffect(() => {
    //   // Handle incoming messages when the app is open
    //   messaging.onMessage((payload) => {
    //     console.log('Message received. ', payload);
    //     // Add your custom logic to handle the incoming message here
    //   });

    //   // Handle incoming messages when the app is in the background or closed
    //   messaging.onBackgroundMessage((payload) => {
    //     console.log('Background message received. ', payload);
    //     // Add your custom logic to handle the incoming message here
    //   });
    // }, []);

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='5'>
          <img src={img} className="img-fluid" alt="Sample image" />
        </MDBCol>
        
        <MDBCol col='4' md='5' >

          <div className="d-flex flex-row align-items-center justify-content-center" id='main' styles={{paddingLeft:"50px"}}>
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
          <MDBInput wrapperClass='mb-4' label='SSID' id='formControlLg' type='email' name='myid' onChange={(e)=>{setssid(e.target.value)}} size="lg" />
          <MDBInput wrapperClass='mb-4' label='Password' id='second' type='password' name='password' onChange={(e)=>{setpassword(e.target.value)}}size="lg"/>

          {/* <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div> */}
          {/* <div className="button">
            <input type="submit" defaultValue="Register" onClick={routeToSignup}/>
          </div> */}
          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'  onClick={routeToDashboard} >Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="" className="link-danger" onClick={routeToSignup}>Register</a></p>
          </div>
          
        </MDBCol>

      </MDBRow>

     

    </MDBContainer>
  );
}

export default App;