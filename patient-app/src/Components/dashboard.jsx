import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import './dashboard.scss'
import Sidebar from './sidebar/Sidebar'
import Navbar from './navbar/Navbar'
import Table from './table/Table'
import axios from "axios";
import authHeader from '../services/auth-header';
import { componentDidMount, useEffect, useState } from 'react';
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
      axios.post("http://localhost:9005/api/v1/auth/assign-notification-token",
        {
            "token": currentToken
        },
        {
            headers:authHeader()
        }
        ).then((resp)=>{
          console.log("Notification Token set corresponding to your SSID");
        }
        );
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
  var options = {
    body: payload.notification.body,
    icon: 'https://s01.sgp1.digitaloceanspaces.com/inline/845827-vjuyhklbja-1501764800.jpeg',
    dir: 'ltr',
  };
  let notifications = 0;
  if(localStorage.getItem("notifications")){
    notifications = Number(localStorage.getItem("notifications"));
  } 
  localStorage.setItem("notifications", String(notifications+1));
  window.dispatchEvent(new Event('storage'));
  new Notification(payload.notification.title, options);
  // ...
});

function App(){  
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar />
                <div className="listContainer">
                    <div className="listTitle"></div>
                        <Table />
                    </div>
                </div>
        </div>
    )
}

export default App;