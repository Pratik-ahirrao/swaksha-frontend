import "./ApproveConsent.scss"
import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"
import Table from "./table/Table"
import ConsentForm from "./consentForm/ConsentForm"
const consents = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
      <div className="listContainer">
                    <div className="listTitle"> </div>
                       <ConsentForm />
                    </div>
    </div>
  </div>
  )
}

export default consents;