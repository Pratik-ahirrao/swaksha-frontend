import "./ApproveConsent.scss"
import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"
import Table from "./table/Table"
import ConsentForm from "./consentForm/ConsentForm"
import ProfileInfo from "./profile_info/Profile_info"
const profile = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
      <div className="listContainer">
                    <div className="listTitle">
                    <ProfileInfo/>
                         </div>
                       
                    </div>
    </div>
  </div>
  )
}

export default profile;