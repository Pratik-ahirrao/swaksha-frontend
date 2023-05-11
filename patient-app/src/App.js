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
import PageNotFound from './Components/pageNotFound/error404';

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
      <Route exact path="/pagenotfound" element={<PageNotFound />}/>
      <Route path="/dashboard"  element={ <RouteGuard ><Dashboard/></RouteGuard>}/>
      <Route path="/consents" element={<RouteGuard ><Consent /></RouteGuard>}/>
      <Route path="/approveConsent" element={<RouteGuard ><ApproveConsent /></RouteGuard>}/>
      <Route path="/profile" element={<RouteGuard ><Profile /></RouteGuard>}/>
      <Route path="/observation" element={<RouteGuard ><Observation /></RouteGuard>}/>
      <Route path="/condition" element={<RouteGuard ><Condition /></RouteGuard>}/>
      <Route path="/procedure" element={<RouteGuard ><Procedure /></RouteGuard>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
