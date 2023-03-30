import Login from './login';
import { BrowserRouter, Route, Switch, Link,Routes } from "react-router-dom";
import Signup from './Components/signup';
import VerifyOtp from './Components/verifyOtp';
import OTP from './Components/otp';
import Dashboard from './Components/dashboard';
import Consent from './Components/consents';
import ApproveConsent from './Components/approveConsent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/verifyOtp" element={<OTP />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/consents" element={<Consent />}/>
      <Route path="/approveConsent" element={<ApproveConsent />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
