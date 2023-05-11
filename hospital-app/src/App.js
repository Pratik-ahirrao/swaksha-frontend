import Login from './Components/login/login';
import { BrowserRouter, Route, Switch, Link,Routes } from "react-router-dom";
 import Signup from './Components/signup';
 import VerifyOtp from './Components/verifyOtp';
 import OTP from './Components/otp';
import Dashboard from './Components/dashboard';
import RequestRecord from './Components/requestRecord';
import RecordDetails from './Components/RecordDetails';
import VerifyConsent from './Components/verifyConsent';
import { setAuthToken } from './Components/setAuthToken';
import { RouteGuard } from './Components/RouteGuard';
import CreateRecord from './Components/createEhrRecord/createRecord';
import ShowRecord from './Components/showEhrRecord/showRecord';

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
      <Route exact path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/> 
       <Route path="/verifyOtp" element={<OTP />}/> 
      <Route path="/dashboard"  element={ <RouteGuard ><Dashboard/></RouteGuard>}/>
      <Route path="/requestData" element={<RouteGuard ><RequestRecord /></RouteGuard>}/>
      <Route path="/requestData/details" element={<RouteGuard><RecordDetails /></RouteGuard>}/>
      <Route path="/verifyConsent" element={<RouteGuard><VerifyConsent /></RouteGuard>}/>
      <Route path="/createRecord" element={<RouteGuard><CreateRecord /></RouteGuard>}/>
      <Route path="/showRecord" element={<RouteGuard><ShowRecord /></RouteGuard>}/>

      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
