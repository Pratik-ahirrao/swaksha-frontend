import Login from './login';
import { BrowserRouter, Route, Switch, Link,Routes } from "react-router-dom";
import Signup from './Components/signup';
import VerifyOtp from './Components/verifyOtp';
import OTP from './Components/otp';
import Dashboard from './Components/dashboard';
import RequestRecord from './Components/requestRecord';
import RecordDetails from './Components/RecordDetails';
import VerifyConsent from './Components/verifyConsent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login />}/>
      {/* <Route path="/signup" element={<Signup />}/> */}
      {/* <Route path="/verifyOtp" element={<OTP />}/> */}
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/requestData" element={<RequestRecord />}/>
      <Route path="/requestData/details" element={<RecordDetails />}/>
      <Route path="/verifyConsent" element={<VerifyConsent />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
