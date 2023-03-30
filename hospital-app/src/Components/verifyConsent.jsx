import "./verifyConsent.scss"
import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"
import Datatable from "./datatable/Datatable"
import VerifyConsentForm from "./verifyConsentForm/VerifyConsentForm"
const consents = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
      <div className="listContainer">
                    <div className="listTitle"></div>
                        <VerifyConsentForm />
                    </div>
    </div>
  </div>
  )
}

export default consents;