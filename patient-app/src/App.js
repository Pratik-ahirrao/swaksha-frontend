import Login from './Components/login/login';
import { BrowserRouter, Route, Switch, Link,Routes } from "react-router-dom";
import Signup from './Components/signup/signup';
import VerifyOtp from './Components/verifyOtp';
import OTP from './Components/otp';
import Dashboard from './Components/dashboard';
import Consent from './Components/consents';
import ApproveConsent from './Components/approveConsent';
import Profile from './Components/profile';
import {RouteGuard} from "./Components/RouteGuard";
import { setAuthToken } from './Components/setAuthToken';
import { Component } from 'react';
import Observation from './Components/viewRecord/observation';
import Procedure from './Components/viewRecord/procedure';
import Condition from './Components/viewRecord/condition';
import "./styles.css";

function App() {
  
const user = localStorage.getItem("user");
if (user) {
    const token=user["token"]
    setAuthToken(token);
}

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route  exact path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/verifyOtp" element={<OTP />}/>
      <Route path="/dashboard"  element={ <RouteGuard ><Dashboard/></RouteGuard>}/>
      <Route path="/consents" element={<Consent />}/>
      <Route path="/approveConsent" element={<ApproveConsent />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/observation" element={<Observation />}/>
      <Route path="/condition" element={<Condition />}/>
      <Route path="/procedure" element={<Procedure />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
